declare var Ext: any;
import { Component } from '@angular/core';
import {model} from '../CompanyModel'

@Component({
  selector: 'LockingGrid-component',
  templateUrl: './LockingGrid.html',
  styles: [``]
})
export class LockingGridComponent {

  store = Ext.create('Ext.data.Store', {
    model,
    autoLoad: true,
    pageSize: 0,
    proxy: {
      type: 'ajax',
      url: 'resources/data/CompanyData.json'
    } 
  });

  isPhone = Ext.os.is.Phone;

  onApprove = (grid, info) => {
    Ext.Msg.alert('Approve', info.record.get('name'));
  }

  onDecline = (grid, info) => {
    Ext.Msg.alert('Decline', info.record.get('name'));
  }

  renderSign = (format, value) => {
     return Ext.util.Format.number(value, format);    
   }

  summarizeCompanies = (grid, context) => context.records.length + ' Companies';

  leftLockedColumnCell = {
      tools: {
        approve: {
          iconCls: 'x-fa fa-check green',
          handler: this.onApprove
        },
        decline: {
          iconCls: 'x-fa fa-ban red',
          handler: this.onDecline,
          weight: 1
        }
      }
  };
}