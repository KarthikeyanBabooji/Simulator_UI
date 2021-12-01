import { Component, OnInit } from '@angular/core';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction-type',
  templateUrl: './transaction-type.component.html',
  styleUrls: ['./transaction-type.component.scss']
})
export class TransactionTypeComponent implements OnInit {
  faExpandAlt = faExpandAlt;
  expand = {
    credit: false,
    debit: false,
    book: false,
  };
 // chart 1
 typePie = 'pie';
 creditData = {
   labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"],
   datasets: [
     {
       backgroundColor: [
         'rgb(255, 99, 132)',
         'rgb(54, 162, 235)',
         'rgb(255, 205, 86)',
         "#f00",
         "#8e5ea2",
         "#3cba9f",
         "#e8c3b9",
         "#c45850",
         '#0f0',
         '#00f',
         '#5ba6ca',
         '#7f334c'
       ],
       stack: 'Stack 0',
       data: [
           66,
           93,
           31,
           76,
           39,
           75,
           36,
           93,
           31,
           76,
           39,
           75,
       ]
   }
   
   ]
 };
 creditOptions = {
   title: {
     display: true,
     text: 'Credit',
     fontSize: '18'
 },
   responsive: true,
   maintainAspectRatio: true,
   legend: {
     position: 'bottom',
     labels: {
       boxWidth: 10
     }
 },
 scales: {
   xAxes: [{
     display: false
   }],
 }
 };

 // chart 2
 debitData = {
   labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"],
   datasets: [
     {
       backgroundColor: [
         'rgb(255, 99, 132)',
         'rgb(54, 162, 235)',
         'rgb(255, 205, 86)',
         "#f00",
         "#8e5ea2",
         "#3cba9f",
         "#e8c3b9",
         "#c45850",
         '#0f0',
         '#00f',
         '#5ba6ca',
         '#7f334c'
       ],
       stack: 'Stack 0',
       data: [
           66,
           93,
           31,
           76,
           39,
           75,
           36,
           93,
           31,
           76,
           39,
           75,
       ]
   }
   
   ]
 };
 debitOptions = {
   title: {
     display: true,
     text: 'Debit',
     fontSize: '18'
 },
   responsive: true,
   maintainAspectRatio: true,
   legend: {
     position: 'bottom',
     labels: {
       boxWidth: 10
     }
 },
 scales: {
   xAxes: [{
     display: false
   }],
 }
 };

 // chart 3

 bookData = {
   labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"],
   datasets: [
     {
       backgroundColor: [
         'rgb(255, 99, 132)',
         'rgb(54, 162, 235)',
         'rgb(255, 205, 86)',
         "#f00",
         "#8e5ea2",
         "#3cba9f",
         "#e8c3b9",
         "#c45850",
         '#0f0',
         '#00f',
         '#5ba6ca',
         '#7f334c'
       ],
       stack: 'Stack 0',
       data: [
           66,
           93,
           31,
           76,
           39,
           75,
           36,
           93,
           31,
           76,
           39,
           75,
       ]
   }
   
   ]
 };
 bookOptions = {
   title: {
     display: true,
     text: 'BookToBook',
     fontSize: '18'
 },
   responsive: true,
   maintainAspectRatio: true,
   legend: {
     position: 'bottom',
     labels: {
       boxWidth: 10
     }
 },
 scales: {
   xAxes: [{
     display: false
   }],
 }
 };

  constructor() { }

  ngOnInit(): void {
  }

  // toggle boolean on object
  expandToggle(passedkey:any) {
    for(const [key, value] of Object.entries(this.expand)){
      key == passedkey ? ((this.expand as any)[key] == true ? (this.expand as any)[key] = false : (this.expand as any)[key] = true) : (this.expand as any)[key] = false;
    }
  };

}
