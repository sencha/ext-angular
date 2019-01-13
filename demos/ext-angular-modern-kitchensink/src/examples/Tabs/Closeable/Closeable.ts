import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'colseabletab-component',
  templateUrl: "./Closeable.html",
  styles: [``]
})
export class CloseableTabComponent implements OnInit  {

  constructor() { }

  nextKey:number = 0;
  tabPanelRef:any;
  tabs:number[] = [
    this.nextKey++,
    this.nextKey++,
    this.nextKey++
  ];

  tabPanelReady = (ele) => {
    this.tabPanelRef = ele.ext;
  }

  onCloseTab = tab => {
    this.tabs = this.tabs.filter(t => t !== tab);
  }
    
  addTab = () => {
    const key = this.nextKey++;
    this.tabs = [...this.tabs, key];
    this.tabPanelRef.setActiveItem(this.tabs.indexOf(key))
    return false;
  }

  ngOnInit() {}

}
