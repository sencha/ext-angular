import { Component, OnInit, ChangeDetectorRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import {navTreeRoot} from '../../../examples/index';

import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import {ButtonComponent} from '../../../examples/Button/Button';
import { VERSION } from '@angular/core';

declare var Ext: any;

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
  files;

  nodeText;
  nodeItems = [];

  filterRegex;
  showTreeFlag = true;

  
  treeStore = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: navTreeRoot
  });  

  constructor(location: Location,private router: Router, changeDetectorRef: ChangeDetectorRef,
    private resolver: ComponentFactoryResolver) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        console.log(location.path(true));
        console.log(val);
        var path = location.path(true);
        if(path){
          this.nodeId = path.substring(path.indexOf("#")+1, path.length);
          console.log("nodeId : " + this.nodeId);
          this.selectedNavNode = this.treeStore.getNodeById(this.nodeId);
          console.log(this.selectedNavNode);
          if(this.selectedNavNode != null) {
            this.nodeText = this.selectedNavNode.get('text');
            console.log("this.nodeText : " + this.nodeText);
            this.nodeItems.unshift(
            );
  
            this.component = this.selectedNavNode.get('component');
            console.log("Component: " + this.component);
            if(this.selectedNavNode.get('layout') != null) {
              this.layout = this.selectedNavNode.get('layout');
              console.log("this.layout : " + this.layout);
            }
            //this.files = this.code[this.nodeText.replace(/\s/g, '')];
            //console.log("this.files : " + this.files);
          }
          else {
              console.log("selectedNavNode not found.")
          }

        }

      }

    })

  }

  ngOnInit() {

  } 


  toggleTree = function(){
    console.log("toggleTree. Before showTreeFlag : " + this.showTreeFlag);
    this.showTreeFlag = !this.showTreeFlag;
    console.log("toggleTree. After showTreeFlag : " + this.showTreeFlag);
  }

  filterNav = function(field, oldValue, newValue) {
    debugger;
    console.log("In filterNav.oldValue : " + oldValue + " newValue: " + newValue);
    const store = this.treeStore;
    var escapeRegex = Ext.String.escapeRegex(newValue);
    console.log(escapeRegex);
    this.filterRegex = new RegExp(`(escapeRegex)`, 'i');
    store.filterBy(record => this.containsMatches(record));
    
  }

  containsMatches(node) {
    const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
    if (found) node.expand();
    node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">$1</span>')
    return found;
  }

  selectionChanged(event) {
    var record = event.record;
    if(record && record.data && record.data.id) {
      var componentSelectedId = record.data.id;
      console.log("ID: " + componentSelectedId)
      this.router.navigate([componentSelectedId]);
    }

  }

  navigate(node) {
    console.log("In naviagte : " + node.getId());
    //debugger;
  }

}
