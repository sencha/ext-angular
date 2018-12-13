
import { Component, OnInit, ChangeDetectorRef, ViewChild, ViewEncapsulation, ViewContainerRef,ElementRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';

import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { VERSION } from '@angular/core';
import { Subject } from "rxjs";

import {navTreeRoot} from '../../test';



declare var Ext: any;



@Component({
  selector: 'app-root',
  templateUrl: 'landingpage.component.html',
  styles: [`
  `],
  // https://angular.io/api/core/ViewEncapsulation#None
  encapsulation: ViewEncapsulation.None,
})
export class LandingpageComponent implements OnInit {

  treeStore: any = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: navTreeRoot
  })
  
  ANGULAR_VERSION: any = VERSION.full
  node: any
  node$: any = new Subject()
 

  constructor(private router: Router) {

    this.node$.subscribe(({
      next: (v) => {
      },
    }));
    
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        var localNode = this.treeStore.getNodeById(val.url);
        this.node$.next(localNode);
      }
    });
  }

  navigate(location) {
    console.log('navigate')
    this.router.navigateByUrl(location);
  }


  ngOnInit() {
    var localNode = this.treeStore.getNodeById(location.pathname);
    this.node$.next(localNode);
  } 

}

