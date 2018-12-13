import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<panel #item [title]=title [layout]="'fit'" [fitToParent]="true">
  <grid #item
    [columns]="gridcolumns" 
    [store]="gridstore"
    (select)="onGridSelect($event)"
  ></grid>
</panel>
  `,
  styles: []
})
export class AppComponent {
  title = 'ext-angular-modern-boilerplate'
  gridcolumns = [
		{ text: 'Name', width: 250, dataIndex: 'name' },
		{ text: 'Email Address', flex: 1, dataIndex: 'email' },
		{ text: 'Phone Number', width: 250, dataIndex: 'phone' }
	]
	gridstore = {
		fields: ['name', 'email', 'phone'],
		data: [
			{ name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
			{ name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
			{ name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
			{ name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
		]
  }
  private onGridSelect({record}) {
		alert(record.data.name)
	}
}
