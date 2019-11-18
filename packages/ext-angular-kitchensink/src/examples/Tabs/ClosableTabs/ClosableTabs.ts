declare var Ext: any;
import { Component, ChangeDetectorRef } from '@angular/core'

@Component({
  selector: 'colseabletab-component',
  templateUrl: "./ClosableTabs.html",
  styles: [``]
})
export class ClosableTabsComponent {

  nextKey:number = 0;
  tabs:number[] = [
    this.nextKey++,
    this.nextKey++,
    this.nextKey++
  ];

  constructor(private cd: ChangeDetectorRef) {}


  tabPanel:any;
  tabPanelReady = (event) => {
    this.tabPanel = event.cmp;
  }

  tabPanelAdded = (event) => {
    if (this.tabPanel != undefined) {
      this.tabPanel.setActiveItem(this.tabs.indexOf(this.tabs.length-1))
    }
  }

  closeTab = (tab) => {
    this.tabs = this.tabs.filter(t => t !== tab);
  }

  addTab = (event) => {
      console.log('add')
    const key = this.nextKey++;
    this.tabs = [...this.tabs, key];
    console.log(this.tabs)
    this.cd.detectChanges();
    //return false;
  }

}
