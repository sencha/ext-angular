declare var Ext: any;
import { Component } from '@angular/core'

Ext.require([
    'Ext.util.Format',
    'Ext.plugin.Responsive'
]);

@Component({
  selector: 'zoomable-sunburst-component',
  templateUrl: "./ZoomableSunburst.html",
  styles: [``]
})

export class ZoomableSunburstComponent {

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
        url: 'assets/resources/data/tree/tree.json'
    },
    idProperty: 'path'
  });

  onTooltip = (component, tooltip, node) => {
try {
    const record = node.data,
        size = record.get('size'),
        n = record.childNodes.length;

    tooltip.setHtml(size ?
        Ext.util.Format.fileSize(size) :
        n + ' file' + (n === 1 ? '' : 's') + ' inside.'
    );
  }
catch(e) {
  console.log('onTooltip')
  console.error(e)
}

  };

  tooltip = {renderer: this.onTooltip};
  transitions = { select: false };

  sunburst:any;
  onSubBurstReady = (event) => {
    this.sunburst = event.cmp;
    this.sunburst.onNodeSelect = (record, selection) => {
        this.sunburst.zoomInNode(record)};
    }

}
