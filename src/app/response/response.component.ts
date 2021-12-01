
import {Component, ViewChild, OnInit, ComponentFactoryResolver, ApplicationRef, Injector, OnDestroy, AfterViewInit } from '@angular/core';
import {CdkPortal,DomPortalHost} from '@angular/cdk/portal';
import { SimulatorService } from '../simulator.service';

/**
 * This component template wrap the projected content
 * with a 'cdkPortal'.
 */

@Component({
  selector: 'window',
  template: `
  
    <ng-container *cdkPortal>
      <ng-content></ng-content>
    </ng-container>
  `
})
export class ResponseComponent implements OnDestroy,AfterViewInit {
 @ViewChild(CdkPortal, {static: false}) portal: CdkPortal;
  private externalWindow = null;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
    private simulatorService:SimulatorService
  ) { 
  }

  ngAfterViewInit() {
    this.externalWindow = window.open('', '', 'width=1000, height=1000, left=400, top=200');

    const host = new DomPortalHost (
      this.externalWindow.document.body,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
    );

    host.attach(this.portal);
  }
  

  ngOnDestroy() {
   this.externalWindow.close();
  }
}