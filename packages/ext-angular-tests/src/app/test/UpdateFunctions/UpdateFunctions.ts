import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'update-functions-component',
  templateUrl: './UpdateFunctions.html',
})

export class UpdateFunctionsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    value:number = 0;

    increment() {
        this.value += 1;
    }
}

