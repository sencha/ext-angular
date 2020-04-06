declare var Ext: any;
import { Component } from '@angular/core'

@Component({
  selector: 'disclosurelist-component',
  templateUrl: "./Disclosure.html",
  styles: [``]
})
export class DisclosureListComponent {

  store = Ext.create('Ext.data.Store', { 
    autoLoad: true,
    proxy: {
      type: 'rest',
      url: 'resources/data/people.json'
    },
    sorters: ['last_name', 'first_name']
  });

  tpl = `<div>{first_name} {last_name}</div>`;

  msgAlert = (param) => {
    Ext.Msg.alert('Tap', 'Disclose more info for ' + param.get('first_name'), Ext.emptyFn);
  };

}
