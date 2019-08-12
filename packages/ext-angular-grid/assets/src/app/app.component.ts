import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
}
