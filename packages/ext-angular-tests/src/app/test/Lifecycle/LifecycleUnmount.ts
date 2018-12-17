import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MyComponent } from './MyComponent/MyComponent';

declare var Ext: any;

@Component({
  selector: 'lifecycle-unmount-component',
  templateUrl: './LifecycleUnmount.html',
  styles: [``]
})

export class LifecycleUnmountComponent implements OnInit {

    constructor() { }
    
    show:boolean = true;

    toggleChild = () => {
        this.show = !this.show;
    }

    ngOnInit() {
    }
}