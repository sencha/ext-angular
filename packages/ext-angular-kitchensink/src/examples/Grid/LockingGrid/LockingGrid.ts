declare var Ext: any;
import { Component } from '@angular/core';
import { model } from '../CompanyModel'

@Component({
  selector: 'LockingGrid-component',
  templateUrl: './LockingGrid.html',
  styles: [``]
})
export class LockingGridComponent {

  isPhone = Ext.os.is.Phone;
  companies = Ext.create('Ext.data.Store', {
    model,
    autoLoad: true,
    nosim: true,
    pageSize: 0,
    proxy: {
      type: 'ajax',
      nosim: true,
      url: 'resources/data/CompanyData.json'
    }
  });

  onApprove = (grid, info) => {Ext.Msg.alert('Approve', info.record.get('name'));}
  onDecline = (grid, info) => {Ext.Msg.alert('Decline', info.record.get('name'));}
  renderSign = (format, value) => {return Ext.util.Format.number(value, format);}
  renderChange = (value) => {return Ext.util.Format.number(value, '0.00');}
  renderPercent = (value) => {return Ext.util.Format.number(value, '0.00%');}
  onCustomFirst = () => {Ext.Msg.alert('Custom Menu', 'Clicked first custom column menu item');}
  onCustomLast = () => {Ext.Msg.alert('Custom Menu', 'Clicked last custom column menu item');}
  summarizeCompanies = (grid, context) => context.records.length + ' Companies';

}