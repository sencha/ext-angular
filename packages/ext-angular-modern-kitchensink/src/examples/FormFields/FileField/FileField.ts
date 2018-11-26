import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'filefield-component',
  templateUrl: "./FileField.html",
  styles: [``]
})
export class FileFieldComponent implements OnInit  {

  constructor() { }

  uploadedFile:any;

  onChange = (event) => {
    this.uploadedFile = event.newValue;
  }
  
  ngOnInit() {}

}
