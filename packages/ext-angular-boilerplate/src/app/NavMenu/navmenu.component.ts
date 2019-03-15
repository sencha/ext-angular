import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var Ext: any;
Ext.require('Ext.data.TreeStore')

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styles: [``]
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  @Input()
  selectionChanged: any;

  @Input()
  width: number;

  @Input()
  store: any;

  @Input()
  responsiveConfig: any;


  ngOnInit() {
  }

  isPhone = Ext.platformTags.phone;


}