import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cell-component',
  templateUrl: './Cell.html',
})

export class CellComponent implements OnInit {

  constructor() { }

  componentWillUnmount() {
    document.getElementById('message').innerHTML = 'unmounted';
  }

  ngOnInit() {
  }

}