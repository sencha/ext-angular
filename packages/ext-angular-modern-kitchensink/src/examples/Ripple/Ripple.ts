import {
  Component,
  OnInit,
  OnChanges ,
  ElementRef,
  Renderer,
  ViewChild,
  SimpleChanges
} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'ripple-component',
  templateUrl: "./Ripple.html",
  styles: [`
    .ripple-target {
      position: relative;
      height: 150px;
      width: 300px;
      line-height: 150px;                       
      text-align: center;
      background-color: white;
      cursor: pointer;
      white-space: wrap;
      border: 2px dashed #D0D0D0;
    }
  `]
})
export class RippleComponent implements OnInit  {

  constructor() { }

  clickHandler = (event) => {
    console.log('....In clickHandler enabling the ripple effect using Ext....');
    Ext.get(event.target).ripple(event, {})
  }

  ngOnInit() {}

}
