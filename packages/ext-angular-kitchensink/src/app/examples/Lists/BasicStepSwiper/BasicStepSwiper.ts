declare var Ext: any;
import { Component } from '@angular/core'

Ext.require([
    'Ext.dataview.listswiper.ListSwiper',
    'Ext.dataview.listswiper.Stepper'
]);

@Component({
  selector: 'basicstepswiper-component',
  templateUrl: "./BasicStepSwiper.html",
  styles: [``]
})

export class BasicStepSwiperComponent {

  store = Ext.create('Ext.data.Store', { 
    autoLoad: true,
    proxy: {
      type: 'rest',
      url: 'resources/data/people.json'
    },
    sorters: ['last_name', 'first_name']
  });

  tpl =`<div>
      <div style="font-size:16px;margin-bottom:5px;">{first_name} {last_name}</div>
      <div style="font-size:12px;color:#666;">{title}</div>
    </div>`;

  onSelect = ({list, selected}) => {
    Ext.toast(`You selected ${selected.get('first_name')} ${selected.get('last_name')}.`);
  }

  onCall = (list, {record}) => {
    Ext.toast(`Call ${record.get('first_name')} ${record.get('last_name')}`)
  }

  onMessage = (list, {record}) => {
    Ext.toast(`Message ${record.get('first_name')} ${record.get('last_name')}`)
  }

  onEdit = (list, {record}) => {
    Ext.toast(`Edit ${record.get('first_name')} ${record.get('last_name')}`)
  }

}
