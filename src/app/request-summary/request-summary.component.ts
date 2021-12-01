import { Component, OnInit } from '@angular/core';
import { SimulatorService } from '../simulator.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router"
@Component({
  selector: 'app-request-summary',
  templateUrl: './request-summary.component.html',
  styles: [
    `
      :host >>> .tooltip-inner {
        background-color: #EAA6A6;
        color: #4F0000;
      }
      
    `
  ]
})
export class RequestSummeryComponent implements OnInit {
  selectedValue: string;
 public  fileContent;
  public simulatorForm;
public fileName;
public filterQuery = "";
public rowsOnPage = 5;
public sortBy = "startTime";
public sortOrder = "desc";
data
searchCriteria
  constructor(private router: Router,private formBuilder: FormBuilder,private simulatorService:SimulatorService) {
   
   }

  ngOnInit(): void {
    this.searchCriteria  =  this.formBuilder.group({
      transactionId: [''],
       corelationId: [''],
       startDate: [''],
       endDate: [''],
       dateRange:[new Array()]
  
    });
    this.getSummeryDetails();
  }

  getDetails(summeryDetails,req){

   this.simulatorService.setCorelationId(summeryDetails.correlationId);
   this.simulatorService.setTxnId(summeryDetails.transactionId)
   this.simulatorService.setMessageId(summeryDetails.msgId)
   if(req=='txnId') 
   this.router.navigate(['/workflow'])
   else
   this.router.navigate(['/audit-trail'])
  }
  getSummeryDetails(){

    this.simulatorService.getRequestSummeryData(this.searchCriteria.value).subscribe(res=>{
      
      
      this.data=res;
  });
  }
  reset(){
    this.searchCriteria.reset();

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
    
  
    this.getSummeryDetails();
  }
}
