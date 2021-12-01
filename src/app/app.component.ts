import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SimulatorService } from './simulator.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  selectedValue: string;

  


  constructor(private formBuilder: FormBuilder,private simulatorService:SimulatorService){
 
  }

  ngOnInit() {
   
}
}
