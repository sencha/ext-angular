declare var Ext: any;
import { Component, ViewEncapsulation } from '@angular/core'
import onTooltip from './tooltip';
import './styles.css';

@Component({
  selector: 'treemap-tooltip-component',
  templateUrl: "./TreeMapToolTip.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./styles.css']
})

export class TreeMapToolTipComponent {

  tooltipRenderer = onTooltip;
  nodeValue = (node) => {
    return node.data.cap;
  }

  colorAxis = Ext.create('Ext.d3.axis.Color', {
    scale: {
        type: 'linear',
        domain: [-5, 0, 5],
        range: ['#E45649', '#ECECEC', '#50A14F']
    },
    field: 'change',
    processor: (axis, scale, node, field) => {
        var record = node.data;
        return record.isLeaf() ? scale(record.get(field)) : '#ececec';
    }
  });

  store = Ext.create('Ext.data.TreeStore', {
    autoLoad: true,
    fields: [
      'name',
      'description',
      'cap',
      {
        name: 'leaf',
        calculate: function (data) {
            return data.root ? false : !data.children;
        }
      },
      {
        name: 'change',
        type: 'number',
        calculate: function () {
            return (-5 + Math.random() * 10).toFixed(2); // percentages
        }
      },
      {
        name: 'expanded',
        type: 'boolean',
        defaultValue: true
      }
    ],
    proxy: {
      type: 'ajax',
      url: 'assets/resources/data/tree/stocks.json'
    }
  });
}
