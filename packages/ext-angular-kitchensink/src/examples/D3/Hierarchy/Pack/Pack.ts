declare var Ext: any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Pack-component',
  templateUrl: './Pack.html',
  styles: [``]
})
export class PackComponent {

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
})

onTooltip = (component, tooltip, node) => {
    const record = node.data,
        size = record.get('size'),
        n = record.childNodes.length;
    let html = '<span style="font-weight: bold">' + record.get('text') + '</span><br>';

    if (size) {
        html += Ext.util.Format.fileSize(size);
    } else {
        html += n + ' file' + (n === 1 ? '' : 's') + ' inside.'
    }

    tooltip.setHtml(html);
}

   isPhone = Ext.os.is.Phone;

}