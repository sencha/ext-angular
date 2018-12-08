import {Component, OnInit, ViewEncapsulation} from '@angular/core'

declare var Ext: any;

Ext.require([
    'Ext.util.Format',
    'Ext.plugin.Responsive'
]);

@Component({
  selector: 'zoomable-sunburst-component',
  templateUrl: "./ZoomableSunburst.html",
  styles: [``]
})

export class ZoomableSunburstComponent implements OnInit  {

  constructor() {}

  store = Ext.create('Ext.data.TreeStore', {
    autoLoad: true,
    defaultRootText: 'd3',
    fields: [
        'name',
        'path',
        'size',
        {
            name: 'leaf',
            calculate: function (data) {
                return data.root ? false : !data.children;
            }
        },
        {
            name: 'text',
            calculate: function (data) {
                return data.name;
            }
        }
    ],
    proxy: {
        type: 'ajax',
        url: 'build/resources/data/tree/tree.json'
    },
    idProperty: 'path'
  });

  onTooltip = (component, tooltip, node) => {
    const record = node.data,
        size = record.get('size'),
        n = record.childNodes.length;

    tooltip.setHtml(size ?
        Ext.util.Format.fileSize(size) :
        n + ' file' + (n === 1 ? '' : 's') + ' inside.'
    );
  };

  tooltip = {renderer: this.onTooltip};
  transitions = { select: false };

  onSelectionChange = (sunburst, node) => {
    console.log('############3333', sunburst, node);  
    sunburst.zoomInNode(node);}

  ngOnInit() {}
}
