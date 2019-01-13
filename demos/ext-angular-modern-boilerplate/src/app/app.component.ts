import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styles: []
})
export class AppComponent {

	ANGULAR_VERSION: any = VERSION.full
	title = 'ext-angular-modern-boilerplate - Angular v' + this.ANGULAR_VERSION

	constructor(private router: Router) {

	}

	showAppMenu: boolean = false;

	toggleAppMenu = () => {
		this.showAppMenu = !this.showAppMenu;
	}

	onHideAppMenu = () => {
		this.showAppMenu = false;
	}

	navigate = (event) => {
		console.log("navigate");

		var record = event.record;
		console.log(record.data.id);
		this.router.navigate([record.data.id]);
	}

	navStore = {
		root: {
			children: [
				{ id: '/', text: 'Home', iconCls: 'x-fa fa-home', leaf: true },
				{ id: '/about', text: 'About', iconCls: 'x-fa fa-info', leaf: true },
			]
		}
	};

	responsiveConfig = {
		medium: {
			micro: true,
			width: 56
		},
		large: {
			micro: false,
			width: 200
		}
	};

}
