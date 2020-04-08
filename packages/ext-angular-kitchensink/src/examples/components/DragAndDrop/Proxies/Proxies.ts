declare var Ext: any;
import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'proxies-dragdrop-component',
  templateUrl: "./Proxies.html",
  styleUrls: [`./styles.css`],
  encapsulation: ViewEncapsulation.None
})
export class ProxiesDragDropComponent {

  noneText:any = 'No Proxy';
  parentRef: any;
  noneRef: any;
  originalRef: any;
  placeholderRef: any;

  doDestroy() {
    Ext.destroy(this.sources.forEach(Ext.destroy.bind(Ext)));
  }

  parentReady = (event) => {
    this.parentRef = event.cmp.el;
    this.sources[0].setConstrain(this.parentRef);
    this.sources[1].setConstrain(this.parentRef);
    this.sources[2].setConstrain(this.parentReady);
    this.parentRef.destroy = this.doDestroy.bind(this);
  }

  noneEleReady = (event) => {
    this.noneRef = event.cmp.el;
    this.sources[0].setElement(this.noneRef);
  }

  originalEleReady = (event) => {
    this.originalRef = event.cmp.el;
    this.sources[1].setElement(this.originalRef);
  }

  placeholderEleReady = (event) => {
    this.placeholderRef = event.cmp.el;
    this.sources[2].setElement(this.placeholderRef);
  }

  sources = [
    // No proxy, just track the mouse cursor
    new Ext.drag.Source({
      proxy: 'none',
      listeners: {
        dragmove: (source, info) => {
          const pos = info.proxy.current;
          this.noneText = Ext.String.format('X: {0}, Y: {1}', Math.round(pos.x), Math.round(pos.y));
          this.noneRef.setHtml(this.noneText);
        },
        dragend: () => {
          this.noneRef.setHtml('No Proxy');
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
          cls: 'proxy-drag-custom',
          html: 'Custom'
      }
    })
  ];

}
