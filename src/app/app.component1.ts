import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SimulatorService } from './simulator.service';
import { MatStepper } from '@angular/material/stepper';
import { NgxXml2jsonService } from 'ngx-xml2json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
    }
  ]
})

export class AppComponent {

  
  onlyShowDifferences = false;
  attributeOrderIsImportant = true;
  enableRevert = true;
  enableAdvance = true;
  displayEntry = false;
  error = undefined;
  save = false;
  lefttree;
  righttree;
 





public deploymentId;
public processId;
public requestParms;
simulatorForm: FormGroup;
isSubmitted  =  false;
isEditable = false;

public data;
public transformationViewData;
public filterQuery = "";
public rowsOnPage = 10;
public sortBy = "transactionID";
public sortOrder = "desc";
leftJSONtree
rightJSONtree
auditData
@ViewChild('stepper') public matStepper: MatStepper;


  constructor(private formBuilder: FormBuilder,private simulatorService:SimulatorService){
   this.getSummeryDetails();
  }

  ngOnInit() {
    this.simulatorForm  =  this.formBuilder.group({
      deploymentId: ['business-application-kjar-1_0-SNAPSHOT', Validators.required],
      processId: ['business-application-kjar.orchestrator', Validators.required],
      requestParms: ['', Validators.required]
    });
}
getAuditLogDetails(transactionId){
  this.simulatorService.getAuditLogDetails(transactionId).subscribe(res=>{
    
   this.auditData=res;
  });

}
getDetails(summeryDetails){
  this.getTransactionViewDetail(summeryDetails.transactionID);
  this.getAuditLogDetails(summeryDetails.transactionID);
}

lefttreeEnrichment
righttreeEnrichment
lefttreeValidation
righttreeValidation

lefttreeCompliance
righttreeCompliance
lefttreetrans
righttreetrans
stringToXML(oString) {
 
  // const parser = new DOMParser();
  //   const xml = parser.parseFromString(oString, 'text/xml');
  //   const obj = this.ngxXml2jsonService.xmlToJson(xml);
  //   return obj;
  //return (new DOMParser()).parseFromString(oString, "text/xml");
 }
getTransactionViewDetail(transactionId){
  this.simulatorService.getTransactionViewData(transactionId).subscribe(res=>{
    this.transformationViewData=res;
    this.lefttree =res['Transformation'][0]['request']
    this.righttree= res['Transformation'][0]['response']
   
   if(res['Compliance']){
    this.lefttreeCompliance =res['Compliance'][0]['request']
    this.righttreeCompliance= res['Compliance'][0]['response']
   

   }
   if(res['TransformationOutBound']){
     
    
    // this.lefttreetrans =this.stringToXML(res['TransformationOutBound'][0]['inboundMessage'])
    // this.righttreetrans= this.stringToXML(res['TransformationOutBound'][0]['outboundMessage'])
   

   }
    if(res['Enrichment']){
      this.lefttreeEnrichment=res['Enrichment'][0]['request']
      this.righttreeEnrichment=res['Enrichment'][0]['response']
    }
 
  if(res['Validation']){
    this.lefttreeValidation=res['Validation'][0]['request']
    this.righttreeValidation=res['Validation'][0]['response']
  }
  
  if(res['Compliance']){
    this.lefttreeCompliance=res['Compliance'][0]['request']
    this.righttreeCompliance=res['Compliance'][0]['response']
  }
 

    this.isEditable = true;
    this.matStepper.next();
  });
}
getSummeryDetails(){

  this.simulatorService.getRequestSummeryData().subscribe(res=>{
    
    this.data=res;
});
}

calculateDiff(startTime,endTime){
if(endTime){
  var startDate= new Date(startTime)
  var endDate = new Date(endTime)
return (endDate.getTime() - startDate.getTime()) / 1000;
}
return null;
}
submit(){
  this.isSubmitted = true;
  if(this.simulatorForm.valid){
    this.simulatorService.getSimulatorData(this.simulatorForm.value).subscribe(res=>{
       
        alert("request posted. CorelationId is")
        this.isEditable = false;
        this.getSummeryDetails();
      }, error => {
        
        alert("request posted. CorelationId is "+error.error.text )
        this.isEditable = false;
        this.getSummeryDetails();
      }
      );
  }
}

}
