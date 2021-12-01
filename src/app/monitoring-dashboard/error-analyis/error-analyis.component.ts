import { Component, OnInit } from '@angular/core';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error-analyis',
  templateUrl: './error-analyis.component.html',
  styleUrls: ['./error-analyis.component.scss']
})
export class ErrorAnalyisComponent implements OnInit {
  faExpandAlt = faExpandAlt;
  expand = {
    line: false,
   duration: false,
   perMonth: false
  }
  // Chart 1
  typeLine = 'line';
  lineData = {
    labels: ["ER001", "ER002", "ER003", "ER004", "ER005", "ER006", "ER007", "ER008"],
    datasets: [
      {
        label: 'Failed Transaction',
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: '#4472C4',
        pointBackgroundColor: '#4472C4',
        tension: 0,
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
        ]
    }
    
    ]
  };
  lineOptions = {
    title: {
      display: true,
      text: 'Failed Transaction/Error Code for given Tenant',
      fontSize: '18'
  },
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      position: 'bottom'
  },
  scales: {
    xAxes: [{
      offset: 20,
    }],
  }
  };

   // Chart 2
  typePie = 'pie';
  durationData = {
    labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"],
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
          "#c45850"
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
        ]
    }
    
    ]
  };
  durationOptions = {
    title: {
      display: true,
      text: 'Failed Transaction/Error Code for given Tenant',
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

   // Chart 3
   perMonthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
            43,
            31,
            76,
            39,
        ]
    }
    
    ]
  };
  perMonthOptions = {
    title: {
      display: true,
      text: 'Failed Transaction/Month for given tenant and error code',
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
