import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'basiclist-component',
  templateUrl: "./BasicList.html",
  styles: [``]
})
export class BasicListComponent implements OnInit  {

  constructor() { }
  store = Ext.create('Ext.data.Store', { 
    autoLoad: true,
    proxy: {
      type: 'rest',
      url: 'build/resources/data/people.json'
    },
    sorters: ['last_name', 'first_name']
  });

  tpl =
    `<div>
        <div style="font-size:16px;margin-bottom:5px;">{first_name} {last_name}</div>
        <div style="font-size:12px;color:#666;">{title}</div>
    </div>`;

  onSelect = ({list, selected}) => {
    Ext.toast(`You selected ${selected.get('first_name')} ${selected.get('last_name')}.`);
  }


  ngOnInit() {}

}
