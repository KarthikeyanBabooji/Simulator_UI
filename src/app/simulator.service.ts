import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from './../environments/environment'
import { Flow } from './multitenancy/multitenancy.component';
@Injectable({
  providedIn: 'root'
})
export class SimulatorService {

  public transactionId;
  public responseData;
  showPortal;
  //  urlMiddelware ="http://validation-1864676123.us-east-1.elb.amazonaws.com:8098"
  //  urlOrchestrator="http://validation-1864676123.us-east-1.elb.amazonaws.com:8097"

  
   constructor(private http: HttpClient) {

   }

   setTxnId(txnId){
    localStorage.setItem('txnId', txnId);

   }
setInputData(data){
  this.responseData = data;
}

   setMessageId(msgId){
    localStorage.setItem('msgId', msgId);

   }
   setCorelationId(coRelId){
    localStorage.setItem('coRelId', coRelId);

   }
   getMsgId(){
    return localStorage.getItem('msgId');
   }
   getTxnId(){
    return localStorage.getItem('txnId');
   }
   getCorelationId(){
    return localStorage.getItem('coRelId');
   }


getRequestSummeryData(value){
  
    return this.http.post(environment.url + '/requestSummery', value);

}
getTransactionViewData(transactionId){
  return this.http.get(environment.url + '/transformationView?transactionId=' + transactionId);

}

getEnrichmentData(transactionId){

  return this.http.get(environment.url + '/enrichmentView?transactionId=' + transactionId);

}
getValidationData(transactionId){

  return this.http.get(environment.url + '/validationView?transactionId=' + transactionId);

}
getOutBoundData(transactionId){

  return this.http.get(environment.url + '/outboundView?transactionId=' + transactionId);

}
getComplianceData(transactionId){

  return this.http.get(environment.url + '/complainceView?transactionId=' + transactionId);

}
getAuditLogDetails(value){
  return this.http.post(environment.url + '/auditLog', value, {});

}

createWorkflow(value){
  // console.log('service')
  return this.http.post(environment.url + '/saveWorkflow', value, {});
}

updateWorkflow(value){
  // console.log('service')
  return this.http.post(environment.url + '/updateWorkflow', value, {});
}

getWorkflows(){
  return this.http.get<Flow[]>(environment.url + '/workFlowView');
}

}
