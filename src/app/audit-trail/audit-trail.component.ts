import { Component, OnInit } from '@angular/core';
import { SimulatorService } from '../simulator.service';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router"


@Component({
  selector: 'app-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.scss']
})
export class AuditTrailComponent implements OnInit {
  selectedValue: string;


  constructor(private simulatorService:SimulatorService,private formBuilder: FormBuilder) {
   

   }
  public filterQuery = "";
public rowsOnPage = 10;
public sortBy = "transactionID";
public sortOrder = "desc";
  auditData;
  searchCriteria;
  ngOnInit(): void {
    this.searchCriteria  =  this.formBuilder.group({
      transactionId: [''],
       corelationId: [''],
       msgId: [''],
     
    });

    this.searchCriteria.value.transactionId=this.simulatorService.getTxnId();
    this.getAuditLogDetails(this.searchCriteria.value);
    this.searchCriteria.controls.corelationId.setValue(this.simulatorService.getCorelationId());
    this.searchCriteria.controls.msgId.setValue(this.simulatorService.getMsgId());
  }
  
   
  onSubmit(){
     
   this.getAuditLogDetails(this.searchCriteria.value);
  this.simulatorService.setTxnId(this.searchCriteria.value);
  }
  getAuditLogDetails(transactionId){
    
    this.simulatorService.getAuditLogDetails(transactionId).subscribe(res=>{
    
      this.auditData=res;
    });
  
  }
}
