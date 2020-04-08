declare var Ext: any;
import {Component} from '@angular/core';

Ext.require([
  'Ext.util.Format',
  'Ext.plugin.Responsive'
]);
@Component({
  selector: 'sunburst-component',
  templateUrl: './Sunburst.html',
  styles: [``]
})
export class SunburstComponent {

  selection:any;
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
          length = record.childNodes.length;

      tooltip.setTitle(record.get('text'));
      tooltip.setHtml(size ?
          Ext.util.Format.fileSize(size) :
          length + ' file' + (length === 1 ? '' : 's') + ' inside.'
      );
    }
    catch (e) {
      console.error(e)
    }
  }

  onSelectionChange = (event) => {
    //if(Ext.isArray(selection)) selection = selection[0];
    //this.selection = selection;
  }

}
