declare var Ext: any;
import { Component } from '@angular/core';
import { model } from '../CompanyModel'

@Component({
  selector: 'LockingGrid-component',
  templateUrl: './LockingGrid.html',
  styles: [``]
})
export class LockingGridComponent {

  companies = Ext.create('Ext.data.Store', {
    model,
    autoLoad: true,
    pageSize: 0,
    proxy: {
      type: 'ajax',
      url: 'resources/data/CompanyData.json'
    } 
  });
  isPhone = Ext.os.is.Phone;

  renderChange = (value) => {return Ext.util.Format.number(value, '0.00');}
  renderPercent = (value) => {return Ext.util.Format.number(value, '0.00%');}
  onApprove = (grid, info) => {Ext.Msg.alert('Approve', info.record.get('name'));}
  onDecline = (grid, info) => {Ext.Msg.alert('Decline', info.record.get('name'));}
  onCustomFirst = () => {Ext.Msg.alert('Custom Menu', 'Clicked first custom column menu item');}
  onCustomLast = () => {Ext.Msg.alert('Custom Menu', 'Clicked last custom column menu item');}
  summarizeCompanies = (grid, context) => context.records.length + ' Companies';

  columns = [
    {
      locked: true,
      text: 'Company',
      width: 200,
      dataIndex: 'name',
      minWidth: 100,
      menu: {
        customFirst: {
          text: 'Custom First',
          weight: -200,
          handler: 'onCustomFirst'
        },
        customLast: {
          text: 'Custom Last',
          separator: true,
          handler: this.onCustomLast.bind(this)
        }
      }
    },
    {
      locked: true,
      text: 'Price',
      width: 75,
      dataIndex: 'price',
      formatter: 'usMoney',
      editable: true,
      editor: {
        xtype: 'numberfield',
        required: true,
        validators: {
          type: 'number',
          message: 'Invalid price'
        }
      }
    },
    {
      locked: 'left',
      width: 70,
      cell: {
        tools: {
          approve: {
            iconCls: 'x-fa fa-check green',
            handler: this.onApprove.bind(this)
          },
          decline: {
            iconCls: 'x-fa fa-ban red',
            handler:  this.onDecline.bind(this),
            weight: 1
          }
        }
      }
    },
    {
      locked: 'right',
      text: 'Change',
      width: 120,
      renderer: this.renderChange.bind(this),
      dataIndex: 'change',
      cell: {
        encodeHtml: false
      }
    },
    {
      text: '% Change',
      width: 130,
      dataIndex: 'pctChange',
      renderer: this.renderPercent.bind(this),
      cell: {
        encodeHtml: false
      }
    },
    {
      text: 'Last Updated',
      width: 150,
      dataIndex: 'lastChange',
      formatter: 'date("m/d/Y")'
    },
    {
      text: 'Industry',
      width: 150,
      dataIndex: 'industry'
    }
  ]

}