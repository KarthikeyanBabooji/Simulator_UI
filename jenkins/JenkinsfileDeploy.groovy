final deployRole = "arn:aws:iam::113160214424:role/iac-automation"
final STACKNAME = 'ui'
final count = "${params.count}"
final min =  "${params.min}"
final max =  "${params.max}"
final ACCOUNT = '113160214424'
final region = 'us-east-1'
final GIT_REPO = 'https://git.altimetrik.com/bitbucket/scm/nex/ui.git'
final DEPLOY_ROLE_ARN = "arn:aws:iam::113160214424:role/iac-automation"
final GIT_CREDENTIALS_ID = "bitbucket_access"
final CONTAINERPORT = '4200'
final MEMORY = '2048' 
final CPU = '1024'
final IMAGETAG = env.TAG
node('master'){
    
    stage("checkout"){
        timestamps {
            print 'Prepping workspace for build...'
        }

        deleteDir()

        gitBranch = env.BRANCH_NAME ?: 'master'

        git credentialsId: GIT_CREDENTIALS_ID, url: GIT_REPO, branch: gitBranch

        version = currentBuild.number

        timestamps {
            print "Starting build of version ${version} using branch ${gitBranch}"
        }
    }

    stage("Create Task Definition"){
        sh """
        
        if [ -s "${WORKSPACE}/ecs/taskdef/taskdef.json" ]
        then
        echo "Creating Task definition"
        sed -i -e \"s/STACKNAME/${STACKNAME}/g\" -e \"s/CONTAINERPORT/${CONTAINERPORT}/g\" -e \"s/ACCOUNT/${ACCOUNT}/g\" -e \"s/MEMORY/${MEMORY}/g\" -e \"s/CPU/${CPU}/g\" -e \"s/IMAGETAG/${IMAGETAG}/g\" "${WORKSPACE}/ecs/taskdef/taskdef.json"
        else
        echo "Task definition Json file does not exit"
        exit 1 
        fi
        """
	def command = "aws ecs register-task-definition --region 'us-east-1' --tags key=StackId,value='falcon-web'  --cli-input-json 'file://ecs/taskdef/taskdef.json'"
        callCli(deployRole,command)
        // sh """
        //     bash assumerole.sh ${deployRole} ${command}
        // """
    }

    stage("Update Service"){
        def serviceName = "service-${STACKNAME}"
        timestamps {
            print "Updating ${STACKNAME} to latest revision and count of ${count}..."
        }
        def String latestRevision = sh(script: """
        set +x
        aws sts assume-role --role-arn ${deployRole} --role-session-name jenkins | \
  grep -w 'AccessKeyId\\|SecretAccessKey\\|SessionToken' | \
  awk '{print \$2}' | sed 's/\\"//g;s/\\,//' > awscre;\
export AWS_ACCESS_KEY_ID=`sed -n '3p' awscre`;\
export AWS_SECRET_ACCESS_KEY=`sed -n '1p' awscre`;\
export AWS_SECURITY_TOKEN=`sed -n '2p' awscre`;\
set -x
        aws ecs describe-task-definition --region 'us-east-1' --task-definition ${STACKNAME} --query 'taskDefinition.revision' --output text""", returnStdout: true).trim() as String

        def command = "aws ecs update-service --region 'us-east-1' --cluster ${STACKNAME} --service ${serviceName} --desired-count ${count} --task-definition ${STACKNAME}:${latestRevision}"
        callCli(deployRole,command)
        sleep 10
        timestamps {
            print "${STACKNAME} has been updated"
        }
    }

    stage("Auto-Scaling") {
        def serviceName = "service-${STACKNAME}"
        def putCommand = 'put-scaling-policy'

        // try{
        //     println "Delete Auto-scaling"
        //     def command =  "aws application-autoscaling delete-scaling-policy --region ${region} --service-namespace ecs --resource-id service/${STACKNAME}/${STACKNAME} --scalable-dimension ecs:service:DesiredCount --policy-name 'ecs-autoscaling'"
        //     callCli(deployRole,command)
        //     command =  "aws application-autoscaling deregister-scalable-target --region ${region} --service-namespace ecs --resource-id service/${params.stackName}/${params.stackName}-${params.color.toLowerCase()} --scalable-dimension ecs:service:DesiredCount"
        //     callCli(deployRole,command)
        // }
        // catch(err){
        //     println "Could not delete auto scaling policy or auto-scaling policy not found"
        // }

        println "Register scalable Target"


        command =  """aws application-autoscaling register-scalable-target --region ${region} --service-namespace ecs \
                --resource-id service/${STACKNAME}/${serviceName} --scalable-dimension ecs:service:DesiredCount \
                --role-arn ${deployRole} \
                --min-capacity  ${min} --max-capacity ${max} """
        callCli(deployRole,command)

        command =  "aws application-autoscaling ${putCommand} --region ${region} --cli-input-json 'file://ecs/autoscaling/autoscaling.json'"
        callCli(deployRole,command)
    }
}

def callCli(deployRole,command){
sh """
set +x
aws sts assume-role --role-arn ${deployRole} --role-session-name jenkins | \
  grep -w 'AccessKeyId\\|SecretAccessKey\\|SessionToken' | \
  awk '{print \$2}' | sed 's/\\"//g;s/\\,//' > awscre;\
export AWS_ACCESS_KEY_ID=`sed -n '3p' awscre`;\
export AWS_SECRET_ACCESS_KEY=`sed -n '1p' awscre`;\
export AWS_SECURITY_TOKEN=`sed -n '2p' awscre`;\
set -x
${command}
"""
}
