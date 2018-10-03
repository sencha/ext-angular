declare var Ext: any;
import { Component } from '@angular/core';

@Component({
	selector: '',
	styles: [``],
	template: `
<pivotgrid
	[title]='"the title"'
	[matrix]='matrix'
	fitToParent=true
	(ready)="readyPivotGrid($event)"
	>
</pivotgrid>
 `
})
export class AnalyzeComponent {


// 	<pivotgrid
// 	[matrix]='matrix'
// 	[title]='"the title"'
// 	fitToParent=true
// 	(ready)="readyPivotGrid($event)"
// 	(pivotstart)="onPivotgridPivotStart($event)"
// 	(pivotdone)="onPivotgridPivotDone($event)"
// 	>
// </pivotgrid>



	//public pivotgridConfig: any;
	//	[config]='pivotgridConfig'

	matrix = {
		type: 'local',
		store: {
			autoLoad: true,
			data: [
				{"id": 1,"value": 2075,"date": "07/12/2013","country": "Belgium","company": "Macromedia","quantity": 8},
				{"id": 2,"value": 2779,"date": "15/07/2013","country": "Belgium","company": "Lavasoft","quantity": 101},
				{"id": 3,"value": 6852,"date": "10/07/2014","country": "United States","company": "Sibelius","quantity": 913},
				{"id": 4,"value": 4492,"date": "05/08/2012","country": "United States","company": "Google","quantity": 444},
				{"id": 5,"value": 5502,"date": "27/10/2012","country": "Canada","company": "Finale","quantity": 693},
				{"id": 6,"value": 9881,"date": "01/12/2014","country": "Belgium","company": "Chami","quantity": 662},
				{"id": 7,"value": 7828,"date": "04/01/2014","country": "United Kingdom","company": "Chami","quantity": 349},
				{"id": 8,"value": 9144,"date": "17/06/2013","country": "Netherlands","company": "Google","quantity": 754},
				{"id": 9,"value": 4028,"date": "24/02/2014","country": "United States","company": "Macromedia","quantity": 879},
				{"id": 10,"value": 2281,"date": "06/01/2015","country": "United Kingdom","company": "Lavasoft","quantity": 722},
			],
		},
		leftAxis: [
			{
				dataIndex:  'company',
				direction: 'DESC',
				header:     'Company',
				width: 150,
				sortable:   true
			}
		],
		topAxis: [
			{
			dataIndex:  'country',
			direction: 'DESC'
			}
		],
		aggregate: [
			{
				dataIndex:  'value',
				header:     'Sum',
				name: 'sum',
				width: 150,
				aggregator: 'sum'
			}
		]
	}



	pivotgridConfig= {
		title: 'By Country2',
		height: '100%',
		matrix: {
			type: 'local',
			store: {
				autoLoad:   true,
				data: [
					{"id": 1,"value": 2075,"date": "07/12/2013","country": "Belgium","company": "Macromedia","quantity": 8},
					{"id": 2,"value": 2779,"date": "15/07/2013","country": "Belgium","company": "Lavasoft","quantity": 101},
					{"id": 3,"value": 6852,"date": "10/07/2014","country": "United States","company": "Sibelius","quantity": 913},
					{"id": 4,"value": 4492,"date": "05/08/2012","country": "United States","company": "Google","quantity": 444},
					{"id": 5,"value": 5502,"date": "27/10/2012","country": "Canada","company": "Finale","quantity": 693},
					{"id": 6,"value": 9881,"date": "01/12/2014","country": "Belgium","company": "Chami","quantity": 662},
					{"id": 7,"value": 7828,"date": "04/01/2014","country": "United Kingdom","company": "Chami","quantity": 349},
					{"id": 8,"value": 9144,"date": "17/06/2013","country": "Netherlands","company": "Google","quantity": 754},
					{"id": 9,"value": 4028,"date": "24/02/2014","country": "United States","company": "Macromedia","quantity": 879},
					{"id": 10,"value": 2281,"date": "06/01/2015","country": "United Kingdom","company": "Lavasoft","quantity": 722},
				],
				fields: [
					{name: 'id',        type: 'int'},
					{name: 'company',   type: 'string'},
					{name: 'country',   type: 'string'},
					{name: 'date',      type: 'date', dateFormat: 'd/m/Y'},
					{name: 'value',     type: 'int'},
					{name: 'quantity',  type: 'int'},
					{
						name: 'year',
						convert: function(v, record){
								return Ext.Date.format(record.get('date'), "Y");
						}
					},{
						name: 'continent',
						convert: function(v, record){
							if(Ext.Array.indexOf(['Belgium', 'Netherlands', 'United Kingdom'], record.get('country')) >= 0) return 'Europe';
							if(Ext.Array.indexOf(['Canada', 'United States'], record.get('country')) >= 0 ) return 'North America';
							if(Ext.Array.indexOf(['Australia'], record.get('country')) >= 0 ) return 'Australia';
						}
					}
				]
			},
			topAxis: [{
				width:      150,
				dataIndex:  'country'
			}],
			leftAxis: [{
				dataIndex:  'company',
				header:     'Company',
				width: 150,
				sortable:   true
			}],
			aggregate: [
				{
					dataIndex:  'value',
					header:     'Sum',
					name: 'sum',
					width: 110,
					aggregator: 'sum'
				},
				{
					dataIndex:  'value',
					header:     '#',
					name: 'count',
					width: 60,
					aggregator: 'count',
					align:      'right',
					renderer:   Ext.util.Format.numberRenderer('0')
				}
			]
		}
	};
	public thePivotGrid; any;
	readyPivotGrid(thePivotGrid) {
		console.log('readyPivotGrid');
		this.thePivotGrid = thePivotGrid;
	}
	public onPivotgridPivotStart({matrix}) {
		console.log('onPivotgridPivotStart');
	}
}
