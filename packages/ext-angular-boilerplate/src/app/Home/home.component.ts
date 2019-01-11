import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { gridData } from './data';

declare var Ext: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [``]
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    isPhone = Ext.platformTags.phone;

    store = Ext.create('Ext.data.Store', {
        fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
        data: gridData
    });

    emailresponsiveConfig = {
        small: {
            hidden: true
        },
        medium: {
            hidden: false
        }
    };

    searchresponsiveConfig = {
        small: {
            flex: 1
        },
        medium: {
            flex: undefined
        }
    };

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