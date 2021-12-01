import { Component, OnInit } from '@angular/core';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction-status',
  templateUrl: './transaction-status.component.html',
  styleUrls: ['./transaction-status.component.scss'],
})
export class TransactionStatusComponent implements OnInit {
  faExpandAlt = faExpandAlt;

  expand = {
    givenYear: false,
    tenant: false
  };

  type = 'bar';
  data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: 'Passed Transactions',
        backgroundColor: '#4472C4',
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
    },
    {
      label: 'Failed Transactions',
      backgroundColor: '#ED7D31',
      stack: 'Stack 0',
      data: [
          76,
          203,
          41,
          86,
          49,
          85,
          46,
          203,
          41,
          86,
          49,
          85,
      ]
  }
    ]
  };
  options = {
    title: {
      display: true,
      text: 'Transaction status summery given year',
      fontSize: '18'
  },
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      position: 'bottom'
  },
  scales: {
    xAxes: [{
      maxBarThickness: 20,
    }],
  }
  };

  tenantData = {
    labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"],
    datasets: [
      {
        label: 'Passed Transactions',
        backgroundColor: '#4472C4',
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
    },
    {
      label: 'Failed Transactions',
      backgroundColor: '#ED7D31',
      stack: 'Stack 0',
      data: [
          76,
          203,
          41,
          86,
          49,
          85,
          46,
          203,
          41,
          86,
          49,
          85,
      ]
  }
    ]
  };
  tenantOptions = {
    title: {
      display: true,
      text: 'Transaction status per tenant for given duration',
      fontSize: '18'
  },
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      position: 'bottom'
  },
  scales: {
    xAxes: [{
      maxBarThickness: 20,
    }],
  }
  };
  constructor() {
    
  }



  ngOnInit(): void {}

  // toggle boolean on object
  expandToggle(passedkey:any) {
    for(const [key, value] of Object.entries(this.expand)){
      key == passedkey ? ((this.expand as any)[key] == true ? (this.expand as any)[key] = false : (this.expand as any)[key] = true) : (this.expand as any)[key] = false;
    }
  }
}
