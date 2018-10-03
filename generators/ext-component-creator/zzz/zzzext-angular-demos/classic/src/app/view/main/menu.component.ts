import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import Template from 'sidebar.component.html';
//import Style    from 'sidebar.component.css';


@Component({
	styleUrls: ['./menu.component.css'],
	//styles:[require('./menu.component.css').toString()],
	//moduleId: module.id, 
	selector: 'xmenu',
	//styles:  [``],
	//template : Template,
  //styles   : [Style]
  //template: require('./sidebar.component.html'),
  //styles: [require('./sidebar.component.css')

	templateUrl: 'menu.component.html',
})

export class MenuComponent {
	public expanded: any = [];
	public chevron: any = [];
	public expandedx: any = [];
	public chevronx: any = [];

	//public firstName: any = 'Donald'; public lastName:any = 'Trump';
	//public firstName: any = 'Hillary'; public lastName:any = 'Clinton';
	//public firstName: any = 'Barack'; public lastName:any = 'Obama';
	//public userImage: any;

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

	constructor(public router: Router){
		//this.userImage = 'resources/app/users/' + this.firstName + this.lastName +'.jpeg'

		this.expanded = [false,false,false,false,false,false];
		this.chevron = ['right','right','right','right','right','right'];

		this.expandedx = [false,false,false,false,false,false];
		this.chevronx = ['right','right','right','right','right','right'];


	}

}
