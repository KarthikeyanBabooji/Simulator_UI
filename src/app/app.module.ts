import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatTreeModule } from '@angular/material/tree';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DataFilterPipe } from './data-filter.pipe';
import { DataTableModule } from './angular2Datatbale/DataTableModule';
import { DifferentiateModule } from '@sedeh/differentiate';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RequestSummeryComponent } from './request-summary/request-summary.component';
import { MatCardModule } from '@angular/material/card';
import { WorkflowViewComponent } from './workflow-view/workflow-view.component';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ResponseComponent } from './response/response.component';
import { PortalModule } from '@angular/cdk/portal';
import { MultitenancyComponent } from './multitenancy/multitenancy.component';
import { DecimalPipe } from '@angular/common';
import { MonitoringDashboardComponent } from './monitoring-dashboard/monitoring-dashboard.component';
import { TransactionStatusComponent } from './monitoring-dashboard/transaction-status/transaction-status.component';
import { TransactionPerformanceComponent } from './monitoring-dashboard/transaction-performance/transaction-performance.component';
import { TransactionTypeComponent } from './monitoring-dashboard/transaction-type/transaction-type.component';
import { ErrorAnalyisComponent } from './monitoring-dashboard/error-analyis/error-analyis.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  declarations: [
    AppComponent,
    DataFilterPipe,
    SideNavComponent,
    RequestSummeryComponent,
    WorkflowViewComponent,
    AuditTrailComponent,
    ResponseComponent,
    MultitenancyComponent,
    MonitoringDashboardComponent,
    TransactionStatusComponent,
    TransactionPerformanceComponent,
    TransactionTypeComponent,
    ErrorAnalyisComponent,
  ],
  imports: [
    PortalModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    MatChipsModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    DifferentiateModule,
    MatSidenavModule,
    DataTableModule,
    MatStepperModule,
    CdkStepperModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    ChartModule,
  ],
  providers: [MatDatepickerModule, DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
