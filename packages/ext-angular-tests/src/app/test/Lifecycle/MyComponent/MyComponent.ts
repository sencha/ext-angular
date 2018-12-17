import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'my-component',
  templateUrl: './MyComponent.html',
})

export class MyComponent implements OnInit {

  constructor() { }
  
  componentWillUnmount() {
    document.getElementById('message').innerHTML = 'unmounted'
  }

  ngOnInit() {
  }

}