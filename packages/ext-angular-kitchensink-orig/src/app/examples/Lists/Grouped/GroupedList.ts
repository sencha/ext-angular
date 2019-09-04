declare var Ext: any;
import { Component, OnInit } from '@angular/core'
import { data } from './data'
//import {GroupListService} from './GroupList.service'

@Component({
  selector: 'groupedlist-component',
  templateUrl: "./GroupedList.html",
  styles: [``]
})
export class GroupedListComponent implements OnInit {

 //   constructor(grouplistService : GroupListService) { }



store: any;
//data: any;

ngOnInit() {
console.log('ngOnInit')




        this.store = Ext.create('Ext.data.Store', {
            //model: model,
            autoLoad: true,
            data: data,
            // proxy: {
            //   type: 'rest',
            //   url: 'assets/data/people.json'
            // },
            //nosim: true,
            grouper: {
              groupFn: record => record.get('last_name')[0]
            },
            sorters: ['last_name', 'first_name']
          });
        //   //this.store.load()
    }

    // Ext.onReady(function () {
    //     store = Ext.create('Ext.data.Store', {
    //         autoLoad: true,
    //         proxy: {
    //           type: 'rest',
    //           url: 'resources/data/people.json'
    //         },
    //         grouper: {
    //           groupFn: record => record.get('last_name')[0]
    //         },
    //         sorters: ['last_name', 'first_name']
    //       });
    // });




  tpl =
    `<div>
        <div style="font-size:16px;margin-bottom:5px;">{first_name} {last_name}</div>
        <div style="font-size:12px;color:#666;">{title}</div>
    </div>`;

  onSelect = ({list, selected}) => {
    Ext.toast(`You selected ${selected.get('first_name')} ${selected.get('last_name')}.`);
  }

}
