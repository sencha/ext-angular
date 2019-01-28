declare var Ext: any;
import { Component, ViewEncapsulation, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { VERSION } from '@angular/core';
//import { Subject } from "rxjs";
import { navTreeRoot } from '../../test';

@Component({
  selector: 'app-root',
  templateUrl: 'landingpage.component.html',
  styles: [`
  `],
  // https://angular.io/api/core/ViewEncapsulation#None
  encapsulation: ViewEncapsulation.None,
})
export class LandingpageComponent {

  ANGULAR_VERSION: any = VERSION.full
  bodyStyle: any = `
    backgroundSize: 20px 20px;
    borderWidth: 0px;
    backgroundColor: #e8e8e8;
    backgroundImage: 
      linear-gradient(0deg, #f5f5f5 1.1px, transparent 0), 
      linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)`
  selectionChanged(event) {
    var record = event.record;
    if(record && record.data && record.data.id) {
      var componentSelectedId = record.data.id;
      this.ngZone.run(() => this.router.navigate([componentSelectedId])).then();
    }
  }
  treeStore: any = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: navTreeRoot
  })
  //node: any
  //node$: any = new Subject()
 
  constructor(private router: Router, private ngZone: NgZone) {

  }

}
