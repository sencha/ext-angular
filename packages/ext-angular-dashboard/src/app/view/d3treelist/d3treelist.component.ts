import { Component } from '@angular/core';
import { StocksStore } from '../../store/stocks.store';
import { d3 } from 'd3'

@Component({
	styles:  [``],
  selector: '',
	template: `<d3_treemap [config]='d3Config' ></d3_treemap>`
})
export class D3TreeListComponent { 
	private d3Config: any = {};

	constructor () {
		this.d3Config = {
			left: 10, top:10, width: '98%', height: '96%',
			shadow: true,
			store: new StocksStore()['ext'],
			rootVisible: false,
			nodeValue: function (node) {
					return node.data.cap;
			},
			colorAxis: {
					scale: {
							type: 'linear',
							domain: [-5, 0, 5],
							range: ['#E45649', '#ECECEC', '#50A14F']
					},
					field: 'change',
					processor: function (axis, scale, node, field) {
						var record = node.data;
						return record.isLeaf() ? scale(record.get(field)) : '#ececec';
					}
			}
		}
	}
}
