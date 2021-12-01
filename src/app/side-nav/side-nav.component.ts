import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MatListModule} from '@angular/material/list'
import {MatToolbarModule} from '@angular/material/toolbar'; 
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  fillerNav = [ 
    {
      "text":"Create Flow",
      "url":"/request-summary"

    }, 
    {
      "text":"View Flow",
      "url":"/workflow"

    },
    {
      "text":"Edit Flow",
      "url":"/audit-trail"

    },
    {
      "text":"Delete Flow",
      "url":"/multitenancy"

    },
    {
      "text":"Add Service",
      "url":"/monitoring-dashboard"

    }
  ];
  opened:Boolean=true;
  events: string[] = [];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 900px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
 

}
