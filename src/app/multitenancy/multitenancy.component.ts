import { Component, DoCheck, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SimulatorService } from '../simulator.service';


export interface Flow {
  _id: {
    $oid: string;
  };
  sequence: number;
  url: string;
  kafkaRequestTopic: string;
  methodType: string;
  enableInterface: string;
  country: string;
  flow_type: string;
  transaction_type: string;
  event: string;
}

@Component({
  selector: 'app-multitenancy',
  templateUrl: './multitenancy.component.html',
  styleUrls: ['./multitenancy.component.scss']
})
export class MultitenancyComponent implements OnInit, DoCheck {
  closeResult = '';
  modelTypeAdd = true;
  FLOWS: Flow[] = [];

  flows$: Observable<Flow[]>;

  filter = new FormControl('');

  addEditFlowData;

  constructor(pipe: DecimalPipe, private modalService: NgbModal, private simulatorService: SimulatorService) {

    this.flows$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );
  }

  ngOnInit(): void {
    this.getFlows();
  }

  search(text: string, pipe: PipeTransform): Flow[] {
    return this.FLOWS.filter(e => {
      const term = text.toLowerCase();
      return e.country.toLowerCase().includes(term);
    });
  }

  addEditFlow(content, type, data?): void {
    if(type === 'add'){
      this.modelTypeAdd = true;
      let temp = this.FLOWS.length + 1;  // this need to be refactor 
      this.addEditFlowData = {
        sequence: temp,
        url: '',
        kafkaRequestTopic: '',
        methodType: '',
        enableInterface: '',
        country: '',
        flow_type: '',
        transaction_type: '',
        event: ''
      };
    } else if(type === 'edit'){
      this.modelTypeAdd = false;
      this.addEditFlowData = data;
    };

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  createFlow(){
    this.simulatorService.createWorkflow(this.addEditFlowData).subscribe(data =>{
      this.modalService.dismissAll();
    });
  }

  updateFlow(){
    this.simulatorService.updateWorkflow(this.addEditFlowData).subscribe(data =>{
      this.modalService.dismissAll();
    });
  }

  getFlows(){
    this.simulatorService.getWorkflows().subscribe(data =>{
      this.FLOWS = data;
      this.filter.setValue('1')
      this.filter.setValue('')
    });
  }

  ngDoCheck(){ }

}
