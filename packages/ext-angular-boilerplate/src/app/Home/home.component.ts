declare var Ext: any;
import { Component, HostBinding } from '@angular/core';
import { gridData } from './data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styles: [`
    // :host {
    //   'style': 'display: table; height: 100%',
    //   'class': 'myClass'
    // }
  `]
})
export class HomeComponent {
  //@HostBinding('style.background-color') public color: string = 'white';
  @HostBinding('style.height') public height: string = '100%';
  //@HostBinding('class') classes = 'classA classB';
  store = Ext.create('Ext.data.Store', {
      fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
      data: gridData
  });
  gridCmp: any;

  readyGrid = ({cmp, cmpObj}) => {
      this.gridCmp = cmp;
      //this.gridCmp.setStore(this.store);
  }

  onSearch = (event) => {
    const query = event.newValue.toLowerCase();
    this.store.clearFilter();
    if (query.length) this.store.filterBy(record => {
        const { name, email, phone } = record.data;
        return name.toLowerCase().indexOf(query) !== -1 ||
        email.toLowerCase().indexOf(query) !== -1 ||
        phone.toLowerCase().indexOf(query) !== -1;
    });
  }

}