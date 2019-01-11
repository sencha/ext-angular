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

  onTabChange = ({sender, value}) => {
    this.activeTab = value.getItemId();
  }

  ngOnInit() {
  }


}