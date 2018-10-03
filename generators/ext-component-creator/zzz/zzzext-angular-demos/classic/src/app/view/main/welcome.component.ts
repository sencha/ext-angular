import { Component } from '@angular/core';
//import { Router } from '@angular/router';

@Component({
	styleUrls: ['./welcome.component.css'],
//	styles:[require('./welcome.component.css').toString()],
	selector: 'welcome',
	templateUrl: 'welcome.component.html',
})

export class WelcomeComponent {
	public firstName: any = 'Donald'; public lastName:any = 'Trump';
	public userImage: any;

	constructor(){
		this.userImage = 'assets/resources/app/users/' + this.firstName + this.lastName +'.jpeg'
	}

}
