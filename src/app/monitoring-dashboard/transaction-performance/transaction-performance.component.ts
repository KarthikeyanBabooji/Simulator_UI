import { Component, OnInit } from '@angular/core';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction-performance',
  templateUrl: './transaction-performance.component.html',
  styleUrls: ['./transaction-performance.component.scss']
})
export class TransactionPerformanceComponent implements OnInit {
  faExpandAlt = faExpandAlt;
  type = 'line';

  expand = {
    year: false,
    givenTenant: false,
    perSec: false,
    duration: false,
    throughput: false
  };

  // chart 1
  data = {
    labels: ['0', '2', '4', '6', '8', '10', '12', '14'],
    datasets: [
      {
        label: 'Transaction per second',
        backgroundColor: 'rgba(0,0,0,0)',
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
  options = {
    title: {
      display: true,
      text: 'Transaction per second',
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
 
  // chart 2
  givenTenantData = {
    labels: [['T1', 'Jan'], ['T2', 'Feb'], ['T3', 'Mar'], ['T4', 'Apr'], ['T5', 'May'], ['T6', 'Jun'], ['T7', 'Jul'], ['T8', 'Aug'], ['T9', 'Sep'], ['T10', 'Oct'], ['T11', 'Nov'], ['T12', 'Dec']],
    datasets: [
      {
        label: 'Transaction per second',
        backgroundColor: 'rgba(0,0,0,0)',
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
            93,
            31,
            76,
            39,
        ]
    }
    
    ]
  };
  givenTenantOptions = {
    title: {
      display: true,
      text: 'Transaction per second for given tenant',
      fontSize: '18'
  },
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      position: 'bottom'
  },
  scales: {
    xAxes: [{
      offset: 20
    }],
  }
  };

  // chart 3
  perSecData = {
    labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
    datasets: [
      {
        label: 'Transaction per second',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#4472C4',
        tension: 0,
        pointBackgroundColor: '#4472C4',
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
            93,
            31,
            76,
            39,
        ]
    }
    
    ]
  };
  perSecOptions = {
    title: {
      display: true,
      text: 'Transaction per second',
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

  // chart 4
  durationData = {
    labels: ['Clearing', 'Earmaking', 'Enrichment', 'Validation'],
    datasets: [
      {
        label: 'Transaction per second',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#4472C4',
        tension: 0,
        pointBackgroundColor: '#4472C4',
        stack: 'Stack 0',
        data: [
            66,
            93,
            31,
            76,
        ]
    }
    
    ]
  };
  durationOptions = {
    title: {
      display: true,
      text: 'Transaction per second per service for given duration',
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

  // chart 5
  throughputData = {
    labels: ['10010340A39', '10010340A40', '10010340A41', '10010340A42', '10010340A43', '10010340A44', '10010340A45', '10010340A46', '10010340A47', '10010340A48', '10010340A49', '10010340A50', ],
    datasets: [
      {
        label: 'Transaction throughput',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#4472C4',
        pointBackgroundColor: '#4472C4',
        tension: 0,
        stack: 'Stack 0',
        data: [
            66,
            93,
            31,
            76,
            66,
            93,
            31,
            76,
            66,
            93,
            31,
            76,
        ]
    }
    
    ]
  };
  throughputOptions = {
    title: {
      display: true,
      text: 'Transaction throughput',
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
