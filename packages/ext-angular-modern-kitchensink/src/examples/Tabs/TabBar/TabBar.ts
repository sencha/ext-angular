import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'tabbar-component',
  templateUrl: './TabBar.html',
  styles: [``]
})
export class TabBarComponent implements OnInit {

  constructor() { }

  activeTab:string = 'info';

  onTabChange = (bar, tab) => {
    this.activeTab = tab.getItemId();
  }

  ngOnInit() {
  }


}