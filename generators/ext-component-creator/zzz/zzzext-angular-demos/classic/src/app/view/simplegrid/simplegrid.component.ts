import {Component} from '@angular/core';

@Component({
	selector: 'simplegrid',
	template: `
	<grid fitToParent=true
		[columns]="gridcolumns" 
		[store]="gridstore"
		(select)="onGridSelect($event)"
	></grid>
	`
})

export class SimpleGridComponent {

	gridcolumns = [
		{ text: 'Name', width: 250, dataIndex: 'name' },
		{ text: 'Email Address', flex: 1, dataIndex: 'email' },
		{ text: 'Phone Number', width: 250, dataIndex: 'phone' }
	];

	gridstore = {
		fields: ['name', 'email', 'phone'],
		data: [
			{ name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
			{ name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
			{ name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
			{ name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
		]
	};

	public onGridSelect({record}) {
		alert(record.data.name);
	}
}


















	// public onGridActivate(event) { console.log(event); }
	// public onGridHide(event) { console.log(event); }




	// public gridReady(grid) {
	// //	this.gridExtObject = grid.extjsObject;
	// }

// 	public onTap() { 
// 		console.log('tap'); 
// //		this.gridExtObject.setStore()
// 	}
	//public onEmailChange({newValue}) { console.log(newValue); }

	// gridListeners = {
	// 	select: this.doSelect()
	// }
	// public doSelect() { alert('doselect'); }



		// (activate)="onGridActivate($event)"
		// (hideq)="onGridHide($event)"
		// (ready)="gridReady($event)"



// <x-formpanel title='hi' width='90%'>
// 	<x-emailfield
// 		label='Email'
// 		name='email'
// 		(change)='onEmailChange($event)'
// 	>
// 	</x-emailfield>
// 	<x-button text='hi' ui='action' (tapit)='onTap($event)'></x-button>
// </x-formpanel>


