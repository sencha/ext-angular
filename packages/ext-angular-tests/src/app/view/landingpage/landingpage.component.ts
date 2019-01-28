declare var Ext: any;
import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { VERSION } from '@angular/core';
import { Subject } from "rxjs";
import { navTreeRoot } from '../../test';

@Component({
  selector: 'app-root',
  templateUrl: 'landingpage.component.html',
  styles: [`
  `],
  // https://angular.io/api/core/ViewEncapsulation#None
  encapsulation: ViewEncapsulation.None,
})
export class LandingpageComponent implements OnInit {

  ANGULAR_VERSION: any = VERSION.full
  titlebarHtml = `
  <span class="ext ext-sencha" [style]="{margin: '0 5px 0 7px', fontSize: '20px', width: '20px'}"></span>
  <a extjs href="#" class="app-title">Sencha ExtAngular 6.7 Tests - Angular v${this.ANGULAR_VERSION}</a>
  `
  bodyStyle: any = `
  backgroundSize: 20px 20px;
  borderWidth: 0px;
  backgroundColor: #e8e8e8;
  backgroundImage: 
    linear-gradient(0deg, #f5f5f5 1.1px, transparent 0), 
    linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)`



  selectionChanged(event) {
    console.log('selectionChanged')
    var record = event.record;
    if(record && record.data && record.data.id) {
      var componentSelectedId = record.data.id;
      console.log("selectionChanged ID: " + componentSelectedId);
      this.ngZone.run(() => this.router.navigate([componentSelectedId])).then();
    }
  }

  treeStore: any = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: navTreeRoot
  })
  

  node: any
  node$: any = new Subject()
 
  constructor(private router: Router, private ngZone: NgZone) {

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

  ngOnInit() {
    var localNode = this.treeStore.getNodeById(location.pathname);
    this.node$.next(localNode);
  } 

  navigate(location) {
    console.log('navigate')
    this.router.navigateByUrl(location);
  }

}

