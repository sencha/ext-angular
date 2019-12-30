declare var Ext: any;
import { Component } from '@angular/core';
import { gridData } from './data';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [``]
})
export class HomeComponent {
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