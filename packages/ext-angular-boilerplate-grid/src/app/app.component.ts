declare var Ext: any;
import { Component, VERSION } from '@angular/core'
import { gridData } from './data';
//import { ExtGridComponent } from '@sencha/ext-angular/lib/ext-grid.component';


Ext.require([
  'Ext.layout.*'
])

@Component({
	selector: 'app-root',
    templateUrl: 'app.component.html',
    styles: [`
    `]
})
export class AppComponent {
    data: any
    columns: any
  constructor() {

    this.data = [
        {"id":1,"name":"Debra Ortiz","email":"dortiz0@jimdo.com","phone":"(773)912-6639","hoursTaken":52,"hoursRemaining":38},
        {"id":2,"name":"Kevin Jackson","email":"kjackson1@fc2.com","phone":"(770)681-3608","hoursTaken":16,"hoursRemaining":60},
    ]
    this.columns= [
        {"text": "Name", "width": "250", "dataIndex": "name"},
        {"text": "Email Address", "flex": "1", "dataIndex": "email"},
        {"text": "Phone Number", "width": "250", "dataIndex": "phone"}
    ]

  }

//   store = Ext.create('Ext.data.Store', {
//     fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
//     data: gridData
//   });

//   data = [
//     {"id":1,"name":"Debra Ortiz","email":"dortiz0@jimdo.com","phone":"(773)912-6639","hoursTaken":52,"hoursRemaining":38},
//     {"id":2,"name":"Kevin Jackson","email":"kjackson1@fc2.com","phone":"(770)681-3608","hoursTaken":16,"hoursRemaining":60},
//     {"id":3,"name":"Lois Perez","email":"lperez2@cmu.edu","phone":"(232)554-0867","hoursTaken":91,"hoursRemaining":43},
//     {"id":4,"name":"Bonnie Cole","email":"bcole3@bizjournals.com","phone":"(273)782-5623","hoursTaken":71,"hoursRemaining":25},
//     {"id":5,"name":"Donald Dean","email":"ddean4@bloglovin.com","phone":"(453)964-4797","hoursTaken":58,"hoursRemaining":21},
//     {"id":6,"name":"Denise Chapman","email":"dchapman5@umich.edu","phone":"(930)854-5486","hoursTaken":96,"hoursRemaining":81},
//     {"id":7,"name":"Heather Watkins","email":"hwatkins6@bandcamp.com","phone":"(365)697-3358","hoursTaken":20,"hoursRemaining":99},
//     {"id":8,"name":"Lillian Morrison","email":"lmorrison7@gov.uk","phone":"(652)678-9785","hoursTaken":55,"hoursRemaining":78},
//     {"id":9,"name":"Doris Simmons","email":"dsimmons8@sitemeter.com","phone":"(731)838-5769","hoursTaken":7,"hoursRemaining":29},
//     {"id":10,"name":"Carol Hart","email":"chart9@dailymail.co.uk","phone":"(858)460-7096","hoursTaken":52,"hoursRemaining":82}
//  ]


}


// [data]="{[
//     {"id":1,"name":"Debra Ortiz","email":"dortiz0@jimdo.com","phone":"(773)912-6639","hoursTaken":52,"hoursRemaining":38},
//     {"id":2,"name":"Kevin Jackson","email":"kjackson1@fc2.com","phone":"(770)681-3608","hoursTaken":16,"hoursRemaining":60},
// ]}"