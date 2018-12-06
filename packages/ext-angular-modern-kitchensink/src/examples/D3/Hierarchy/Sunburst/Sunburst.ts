import {Component, OnInit, ViewEncapsulation} from '@angular/core'

declare var Ext: any;

Ext.require([
    'Ext.util.Format',
    'Ext.plugin.Responsive'
]);

@Component({
  selector: 'sunburst-component',
  templateUrl: "./Sunburst.html",
  styles: [``]
})

export class SunburstComponent implements OnInit  {

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
        length = record.childNodes.length;

    tooltip.setTitle(record.get('text'));
    tooltip.setHtml(size ? 
        Ext.util.Format.fileSize(size) :
        length + ' file' + (length === 1 ? '' : 's') + ' inside.'
    );
  }

  onSelectionChange = (field, selection) => {
    if(Ext.isArray(selection)) selection = selection[0];
    this.selection = selection;
  }

  selection:any;

  ngOnInit() {}
}
