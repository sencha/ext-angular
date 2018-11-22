import { Component, OnInit, ChangeDetectorRef, ViewChild, ViewContainerRef,ElementRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import {navTreeRoot} from '../../../examples/index';

import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { VERSION } from '@angular/core';
import { Subject } from "rxjs";

declare var Ext: any;

declare var _code: any;
 const generateBreadcrumb = (node) => {
  const path = [];
  do {
    path.unshift({
      isLeaf: !node.childNodes.length,
      text: node.get("text"),
      path: node.get("id"),
    });
  } while (node = node.parentNode)
   return path;
};

@Component({
  selector: 'app-root',
  templateUrl: 'landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  //code = window._code;

  ANGULAR_VERSION = VERSION.full;

  nodeId;
  selectedNavNode;
  component;
  layout = "fit";

  node: any;
  node$: any = new Subject();
  files: Array<String> = [];
  breadcrumb: Array<any>;

  filterRegex;
  filterVal;
  showTreeFlag = true;
  leafNode = true;
  style;

  
  treeStore = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: navTreeRoot
  });  

  @ViewChild('nonLeafElements') nonLeafEl: ElementRef;

  constructor(location: Location, private router: Router, changeDetectorRef: ChangeDetectorRef,
     private resolver: ComponentFactoryResolver) {

      this.node$.subscribe(({
        next: (v) => {
          this.node = v;
          console.log("Generating breadcrum for ID: " + v.id);
          this.breadcrumb = generateBreadcrumb(v);
          console.log(`BREADCRUMB: ${JSON.stringify(this.breadcrumb.map(b => b.text))}`);
        },
      }));
      
      router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
          console.log(`location.path(true): ${location.path(true)}`);
          console.log(`val: ${val}`);
          console.log(`nodeId: ${val.url}`);
          var localNode = this.treeStore.getNodeById(val.url);
          console.log("Node changed: " + this.node.id);
          console.log("Children el length : " + this.node.childNodes.length);
          if(localNode) {
            this.node = localNode;
            if(this.node.childNodes.length == 0) {
              this.leafNode = true;
              //this.nonLeafEl.nativeElement.style="{display:none}";
              this.style =  {
                'display':'none',
                'text-align': 'center'
              }
            }
            else {
              this.leafNode = false;
              //his.nonLeafEl.nativeElement.style="{display:block}";
              this.style =  {
                'display':'block',
                'text-align': 'center'
              }
            }
            console.log("leafNode :" + this.leafNode);
            this.breadcrumb = generateBreadcrumb(this.node);
            console.log("breadcrumb : " + this.breadcrumb);
            //this.node$.next(this.treeStore.getNodeById(val.url));
          }
          else {
            console.log("Not a valid node. Probably looking at resources");
          }



        }
        
      });
  }

  navigate(location) {
    console.log(`location: ${location}`);
    this.router.navigateByUrl(location);
  }



  ngOnInit() {
    var localNode = this.treeStore.getNodeById(location.pathname);
    if(localNode) {
      this.node = localNode;
      if(this.node.childNodes.length == 0) {
        this.leafNode = true;
        //this.nonLeafEl.nativeElement.style="{display:none}";
        this.style =  {
          display:'none',
          'text-align': 'center'
        }
      }
      else {
        this.leafNode = false;
        this.style =  {
          display:'block',
          'text-align': 'center'
        }
        //this.nonLeafEl.nativeElement.style="{display:block}";
      }
      this.node$.next(this.treeStore.getNodeById(location.pathname));
    }
    else {
      console.log("Not a valid node. Probably looking at resources");
    }

  } 


  toggleTree = function(){
    console.log("toggleTree. Before showTreeFlag : " + this.showTreeFlag);
    this.showTreeFlag = !this.showTreeFlag;
    console.log("toggleTree. After showTreeFlag : " + this.showTreeFlag);
  }

  filterNav = function(event) {
    var oldValue = event.oldValue;
    var newValue = event.newValue;
    this.filterVal = newValue;
    console.log("In filterNav.oldValue : " + oldValue + " newValue: " + newValue);
    const store = this.treeStore;
    var escapeRegex = Ext.String.escapeRegex(newValue);
    console.log(escapeRegex);
    this.filterRegex = new RegExp(escapeRegex, 'i');
    store.filterBy(record => this.containsMatches(record));
    
  }

  containsMatches(node) {
    const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
    if (found) node.expand();
    node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">' + this.filterVal + '</span>')
    return found;
  }

  selectionChanged(event) {
    var record = event.record;
    if(record && record.data && record.data.id) {
      var componentSelectedId = record.data.id;
      console.log("selectionChanged ID: " + componentSelectedId);
      this.router.navigate([componentSelectedId]);
    }

  }



}



@Component({
  selector: 'dummy-component',
  template: ``,
  styles: [``]
})
export class DummyComponent implements OnInit {
  ngOnInit() {
  }
}
