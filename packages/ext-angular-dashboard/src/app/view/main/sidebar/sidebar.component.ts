import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import Template from 'sidebar.component.html';
//import Style    from 'sidebar.component.css';


@Component({
	styleUrls: ['./sidebar.component.css'],
	//styles:[require('./sidebar.component.css').toString()],
	//moduleId: module.id, 
	selector: 'sidebar',
	//styles:  [``],
	//template : Template,
  //styles   : [Style]
  //template: require('./sidebar.component.html'),
  //styles: [require('./sidebar.component.css')

	templateUrl: 'sidebar.component.html',
})

export class SideBarComponent {
	private expanded: any = [];
	private chevron: any = [];
	private expandedx: any = [];
	private chevronx: any = [];

	//private firstName: any = 'Donald'; private lastName:any = 'Trump';
	private firstName: any = 'Hillary'; private lastName:any = 'Clinton';
	//private firstName: any = 'Barack'; private lastName:any = 'Obama';
	private userImage: any;

	toggle(item){
		this.expanded[item] = !this.expanded[item];
		if (this.chevron[item] === 'right') {
			this.chevron[item] = 'down';
		} else {
			this.chevron[item] = 'right';
		}
	}

	togglex(item){
		this.expandedx[item] = !this.expandedx[item];
		if (this.chevronx[item] === 'right') {
			this.chevronx[item] = 'down';
		} else {
			this.chevronx[item] = 'right';
		}
	}

  // isActive(instruction: any[]): boolean {
	// 	var active = this.router.isActive(instruction);
	// 	console.log(active);
	// 	console.log(instruction);
	// 	return active;

  //   //return this.router.isRouteActive(this.router.generate(instruction));
  // }

	constructor(private router: Router){
		this.userImage = 'resources/app/users/' + this.firstName + this.lastName +'.jpeg'

		this.expanded = [false,false,false,false,false,false];
		this.chevron = ['right','right','right','right','right','right'];

		this.expandedx = [false,false,false,false,false,false];
		this.chevronx = ['right','right','right','right','right','right'];


	}

}
