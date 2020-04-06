declare var Ext: any;
import {Component, ViewEncapsulation} from '@angular/core'

Ext.require(['Ext.drag.*'])

@Component({
  selector: 'data-dragdrop-component',
  templateUrl: "./Data.html",
  styleUrls: [`./styles.css`],
  encapsulation: ViewEncapsulation.None
})

export class DataDragDropComponent {

  parentRef: any;
  sourceRef: any;
  targetRef: any;

  doDestroy() {
    Ext.destroy(this.source, this.target);
  }

  parentReady = (event) => {
    this.parentRef = event.cmp.el;
    this.source.setConstrain(this.parentRef);
    this.parentRef.destroy = this.doDestroy.bind(this);
  }

  targetReady = (event) => {
    this.targetRef = event.cmp.el;
    this.target.setElement(this.targetRef);
  }

  sourceReady = (event) => {
    this.sourceRef = event.cmp.el;
    this.source.setElement(this.sourceRef);
  }

  // When the drag starts, the describe method is used to extract the relevant data that the drag
  // represents and is pushed into the info object for consumption by the target.
  source = new Ext.drag.Source({
    handle: '.handle',
    describe: info => {
        info.setData('postage-duration', info.eventTarget.getAttribute('data-days'));
    },
    listeners: {
        dragstart: (source, info) => {
            source.getProxy().setHtml(info.eventTarget.innerHTML);
        }
    },
    proxy: {
        type: 'placeholder',
        cls: 'data-proxy'
    }
  });

  target = new Ext.drag.Target({
    validCls: 'data-target-valid',
    listeners: {
        drop: (target, info) => {
            // Get the data from the info object and use it to display the expectation to the user.
            info.getData('postage-duration').then(duration => {
                const s = Ext.String.format('Your parcel will arrive within {0} days', duration);
                Ext.Msg.alert('Delivery set', s);
            })
        }
    }
  });

}
