declare var Ext: any;
import { Component } from '@angular/core'

@Component({
  selector: 'colseabletab-component',
  templateUrl: "./Closable.html",
  styles: [``]
})
export class ClosableTabComponent {

  nextKey:number = 4;
  tabPanel:any;
  tabs:number[] = [0,1,2,3]

  // tabs:number[] = [
  //   this.nextKey++,
  //   this.nextKey++,
  //   this.nextKey++
  // ];

  tabPanelReady = (ele) => {
    this.tabPanel = ele.ext;
  }

  click = event => {
    this.tabs.map(key => (
      console.log(key)
    ))
  }

  onCloseTab = tab => {
    this.tabs = this.tabs.filter(t => t !== tab);
  }

  addTab = () => {
    const key = this.nextKey++;
    this.tabs = [...this.tabs, key];
    this.tabPanel.setActiveItem(this.tabs.indexOf(key))
    return false;
  }

}
