declare var Ext: any;
import { Component } from '@angular/core'

Ext.require([
    'Ext.dataview.listswiper.ListSwiper'
]);

@Component({
  selector: 'basicaccordionswiper-component',
  templateUrl: "./BasicAccordionSwiper.html",
  styles: [``]
})
export class BasicAccordionSwiperComponent {

  store = Ext.create('Ext.data.Store', { 
    autoLoad: true,
    sorters: ['last_name', 'first_name'],
    proxy: {
        type: 'rest',
        url: 'resources/data/people.json'
    }
})

  tpl = `<div>
      <div style={{fontSize: '16px', marginBottom: '5px'}}>{first_name} {last_name}</div>
      <div style={{fontSize: '12px', color: '#666'}}>{title}</div>
    </div>`;

  onSelect = ({list, selected}) => {
    Ext.toast(`You selected ${selected.get('first_name')} ${selected.get('last_name')}.`);
  }

  onCall = (list, info) => {
    const record = info.record;
    Ext.toast(`Call ${record.get('first_name')} ${record.get('last_name')}`)
  }

  onMessage = (list, info) => {
    const record = info.record;
    Ext.toast(`Message ${record.get('first_name')} ${record.get('last_name')}`)
  }

  onEdit = (list, info) => {
    const record = info.record;
    Ext.toast(`Edit ${record.get('first_name')} ${record.get('last_name')}`)
  }

}
