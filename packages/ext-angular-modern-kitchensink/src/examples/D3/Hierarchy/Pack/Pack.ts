import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'Pack-component',
  templateUrl: './Pack.html',
  styles: [``]
})
export class PackComponent implements OnInit {

  constructor() { }

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



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}