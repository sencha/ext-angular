import {Component, OnInit} from '@angular/core'
import data from './data';

declare var Ext: any;

@Component({
  selector: 'tree-component',
  templateUrl: "./Tree.html",
  styles: ['']
})

export class TreeHierarchyComponent implements OnInit  {

  constructor() {}
  store = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: data
  });


  ngOnInit() {}
}
