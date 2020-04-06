declare var Ext: any;
import { Component } from '@angular/core';

@Component({
  selector: 'tabbar-component',
  templateUrl: './TabBar.html',
  styles: [``]
})
export class TabBarComponent {

  activeTab:string = 'info';

  onTabChange = ({sender, value}) => {
    this.activeTab = value.getItemId();
  }

  onActivateTab = ({sender, value}) => {
    //this.activeTab = value.getItemId();
  }

}