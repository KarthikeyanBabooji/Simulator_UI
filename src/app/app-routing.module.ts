import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestSummeryComponent } from './request-summary/request-summary.component';
import { WorkflowViewComponent } from './workflow-view/workflow-view.component';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';
import { MultitenancyComponent } from './multitenancy/multitenancy.component';
import { MonitoringDashboardComponent } from './monitoring-dashboard/monitoring-dashboard.component';
import { ErrorAnalyisComponent } from './monitoring-dashboard/error-analyis/error-analyis.component';
import { TransactionPerformanceComponent } from './monitoring-dashboard/transaction-performance/transaction-performance.component';
import { TransactionStatusComponent } from './monitoring-dashboard/transaction-status/transaction-status.component';
import { TransactionTypeComponent } from './monitoring-dashboard/transaction-type/transaction-type.component';


const routes: Routes = [
  {
        path: '',
        redirectTo: 'request-summary',
        pathMatch: 'full'
  },
  {
    path: 'request-summary',
    component: RequestSummeryComponent,
  },
  {
    path: 'workflow',
    component: WorkflowViewComponent,
  },
  {
    path: 'audit-trail',
    component: AuditTrailComponent,
  },
  {
    path: 'multitenancy',
    component: MultitenancyComponent,
  },
  
  {
    path: 'monitoring-dashboard',
    component: MonitoringDashboardComponent,
    children: [
      {path: '',
      redirectTo: 'transaction-status',
      pathMatch: 'full'
    },
      {path: 'transaction-status', component: TransactionStatusComponent},
      {path: 'transaction-performance', component: TransactionPerformanceComponent},
      {path: 'transaction-type', component: TransactionTypeComponent},
      {path: 'error-analysis', component: ErrorAnalyisComponent},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
