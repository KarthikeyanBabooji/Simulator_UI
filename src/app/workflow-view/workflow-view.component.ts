import { Component, OnInit, ViewChild } from '@angular/core';
import { SimulatorService } from '../simulator.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { FormBuilder } from '@angular/forms';

import { ComponentFactoryResolver, ApplicationRef, Injector, OnDestroy } from '@angular/core';
import {CdkPortal,DomPortalHost} from '@angular/cdk/portal';
@Component({
  selector: 'app-workflow-view',
  templateUrl: './workflow-view.component.html',
  styleUrls: ['./workflow-view.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
    }
  ]
})
export class WorkflowViewComponent implements OnInit {
public data;
public transformationViewData;
lefttreeEnrichment
righttreeEnrichment
lefttreeValidation
righttreeValidation

lefttreeCompliance
righttreeCompliance
lefttreetrans
righttreetrans
isEditable = false;
public filterQuery = "";
public rowsOnPage = 5;
public sortBy = "status";
public sortOrder = "asc";
lefttree;
righttree;
enrichmentData;
searchCriteria

enrchmentColumns;
validationData;
complianceData;
outboundData;
step = 0;
showPortal = false;
@ViewChild('stepper') public matStepper: MatStepper;
  constructor(public simulatorService:SimulatorService,private formBuilder: FormBuilder, private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector) {
   
   }
  
   ststus=true;
   childView = "inbound";
   inboundStyle="background: #0062A3;";
   showContent(pageValue) {
     if(pageValue==='validation'){
       this.getValidationData();

     }
     if(pageValue==='enrichment'){
       this.getEnrichmentData();
     }
     if(pageValue==='compliance'){
       this.getComplianceData();
     }
     if(pageValue==='outbound'){
       this.getOutBoundData();
     }
     
     this.childView = pageValue;
   }

   setStep(index: number) {
    this.step = index;
  }
  ngOnInit(): void {
 
    this.searchCriteria  =  this.formBuilder.group({
      transactionId: [''],
       corelationId: [''],
       msgId: [''],
     
     
    });
    
    if(this.simulatorService.getTxnId()){

      this.getTransactionViewDetail(this.simulatorService.getTxnId());
      this.searchCriteria.controls.transactionId.setValue(this.simulatorService.getTxnId());
      this.searchCriteria.controls.msgId.setValue(this.simulatorService.getMsgId());
      this.searchCriteria.controls.corelationId.setValue(this.simulatorService.getCorelationId());

    }
  }
 

   selectionChange(event){

     if(event.selectedIndex==2){
      this.getEnrichmentData();
     }
     if(event.selectedIndex==3){
      this.getComplianceData();
     }
     if(event.selectedIndex==4){
      this.getOutBoundData();
     }
     if(event.selectedIndex==1){
     
     }
   }

   onSubmit(){
    this.getTransactionViewDetail( this.searchCriteria.value.transactionId);
    this.simulatorService.setTxnId(this.searchCriteria.value.transactionId);
   
    this.matStepper.selectedIndex=0;
 }
   getValidationData(){
  
    this.simulatorService.getValidationData(this.simulatorService.getTxnId()).subscribe(res=>{
    
      this.validationData=res;
       });

  }
  getOutBoundData(){
  
    this.simulatorService.getOutBoundData(this.simulatorService.getTxnId()).subscribe(res=>{
    
      this.outboundData=res;
       });

  }
  clickOnNewWindoww(){
    
  this.simulatorService.showPortal= !this.simulatorService.showPortal
  }
   getComplianceData(){
  
    this.simulatorService.getComplianceData(this.simulatorService.getTxnId()).subscribe(res=>{
    
      this.complianceData=res;
       });

  }

   getEnrichmentData(){
  
    this.simulatorService.getEnrichmentData(this.simulatorService.getTxnId()).subscribe(res=>{
      this.enrichmentData=res;
     this.enrchmentColumns= Object.keys(this.enrichmentData);
        
    });

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
       
      
      this.lefttreetrans = res['TransformationOutBound'][0]['inboundMessage']
       this.righttreetrans=  res['TransformationOutBound'][0]['outboundMessage']
     
  
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
  
}
