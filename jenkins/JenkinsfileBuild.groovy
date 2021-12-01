final STACKNAME = 'ui'
final ACCOUNT = '113160214424'
final GIT_REPO = 'https://git.altimetrik.com/bitbucket/scm/nex/ui.git'

final ECR_REGISTRY = "${ACCOUNT}.dkr.ecr.us-east-1.amazonaws.com/${STACKNAME}"
final DEPLOY_ROLE_ARN = "arn:aws:iam::113160214424:role/iac-automation"
final GIT_CREDENTIALS_ID = "bitbucket_access"

def gitBranch
def version

node ('master') {

    stage('Preparation') {
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
        

            stage('Get ECR Configuration') {
            timestamps {
                print 'Retrieving ECR configuration...'
            }
            sh """
aws sts assume-role --role-arn ${DEPLOY_ROLE_ARN} --role-session-name jenkins | \
  grep -w 'AccessKeyId\\|SecretAccessKey\\|SessionToken' | \
  awk '{print \$2}' | sed 's/\\"//g;s/\\,//' > awscre;\
export AWS_ACCESS_KEY_ID=`sed -n '3p' awscre`;\
export AWS_SECRET_ACCESS_KEY=`sed -n '1p' awscre`;\
export AWS_SECURITY_TOKEN=`sed -n '2p' awscre`;\
aws ecr get-login --region us-east-1 --no-include-email | xargs xargs
"""
            timestamps {
                print 'Configuration retrieved successfully'
            }
        }
    
        stage('Publish New Version') {
            timestamps {
                print 'Building and publishing our container...'
            }

            sh "docker build -t ${STACKNAME} ."
            sh "docker tag ${STACKNAME}:latest ${ECR_REGISTRY}:${version}"
            sh "docker push ${ECR_REGISTRY}:${version}"
            sh "docker rmi ${STACKNAME} ${ECR_REGISTRY}:${version}"
            
            timestamps {
                print "Container pushed successfully to ${ECR_REGISTRY}"
            }
        }
}
