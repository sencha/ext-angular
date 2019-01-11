import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'sheet-component',
  templateUrl: './Sheet.html',
  styles: [``]
})
export class SheetComponent implements OnInit {

    direct= 'left';
    modal= true;
    reveal= false;
    displayed= false;


  
    
  constructor() { }

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
  
  ngOnInit() {
    

  }


}