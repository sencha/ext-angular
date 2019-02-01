declare var Ext: any;
import { Component } from '@angular/core';

@Component({
  selector: 'sheet-component',
  templateUrl: './Sheet.html',
  styles: [``]
})
export class SheetComponent {
  direct= 'left';
  modal= true;
  reveal= false;
  displayed= false;

  toggleMenu = function() {
    this.displayed = !this.displayed;
  }

  onHide = function() {
    this.displayed = false;
  }

  directLeft = function() {
    this.direct='left'
  }

  directRight = function() {
    this.direct='right'
  }

  directTop = function() {
    this.direct='top'
  }

  directBottom = function() {
    this.direct='bottom'
  }

  setReveal = function() {
    this.reveal = true;
  }

  unsetReveal = function() {
    this.reveal = false;
  }

  setModal = function() {
    this.modal = true;
  }

  unsetModal = function() {
    this.modal = false;
  }

}