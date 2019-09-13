declare var Ext: any;
import { Component } from '@angular/core'

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

  tabPanel:any;
  tabPanelReady = (event) => {
    this.tabPanel = event.ext;
  }

  tabPanelAdded = (event) => {
    if (this.tabPanel != undefined) {
      this.tabPanel.setActiveItem(this.tabs.indexOf(this.tabs.length-1))
    }
  }

  closeTab = (tab) => {
    this.tabs = this.tabs.filter(t => t !== tab);
  }

  addTab = () => {
    const key = this.nextKey++;
    this.tabs = [...this.tabs, key];
    return false;
  }

}
