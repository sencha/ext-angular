import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'proxies-dragdrop-component',
  templateUrl: "./Proxies.html",
  styles: [`
    .original{
      left: 10px;
      top:20px;
    }
  `]
})
export class ProxiesDragDropComponent implements OnInit  {

  constructor() { }

  noneText:any = 'No Proxy';

  parentRef: any;
  noneRef: any;
  originalRef: any;
  placeholderRef: any;

  doDestroy() {
    Ext.destroy(this.sources.forEach(Ext.destroy.bind(Ext)));
  }

  parentReady = (ele) => {
    this.parentRef = ele.ext.el;
    this.sources[0].setConstrain(this.parentRef);
    this.sources[1].setConstrain(this.parentRef);
    this.sources[2].setConstrain(this.parentReady);
    this.parentRef.destroy = this.doDestroy.bind(this);
  }

  noneEleReady = (ele) => {
    this.noneRef = ele.ext.el;
    this.sources[0].setElement(this.noneRef);
  }

  originalEleReady = (ele) => {
    this.originalRef = ele.ext.el;
    this.sources[1].setElement(this.originalRef);
  }

  placeholderEleReady = (ele) => {
    this.placeholderRef = ele.ext.el;
    this.sources[2].setElement(this.placeholderRef);
  }
  
  sources = [
    // No proxy, just track the mouse cursor
    new Ext.drag.Source({
      proxy: 'none',
      listeners: {
        dragmove: (source, info) => {
          const pos = info.proxy.current;
          console.log('######3', this.noneText);
          this.noneText = Ext.String.format('X: {0}, Y: {1}',pos.x, Math.round(pos.y));
          console.log('@@@@@@@@@', this.noneText);
          console.log('mmmmmmmmmmm', this.noneText);
        },
        dragend: () => {
          // this.noneText = 'No :(';
        }
    }
  }),

    // Use the drag element as the proxy. Animate it back into position on drop.
    new Ext.drag.Source({
      revert: true,
      proxy: 'original'
    }),

    // Leave the drag element in place and create a custom placeholder.
    new Ext.drag.Source({
      proxy: {
        type: 'placeholder',
        html: '<div style="width:70px; height:70px; border:3px dotted #039BE5;padding:5px;text-align:center;">Custom</div>'
      }
    })
  ];
  
  ngOnInit() {}

}
