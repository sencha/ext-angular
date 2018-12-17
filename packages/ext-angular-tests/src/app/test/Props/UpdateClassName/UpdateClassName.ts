import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'update-class-name',
  templateUrl: './UpdateClassName.html',
})

export class UpdateClassNameComponent implements OnInit {

  constructor() { }

  className:string = 'red';

  toggleClassName = () => {
    this.className = this.className === 'red' ? 'blue' : 'red';
  }

  ngOnInit() {
  }

}