import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'carousel-component',
  templateUrl: "./Carousel.html",
  styles: [``]
})

export class CarouselComponent implements OnInit  {

  constructor() { }

  carouselInstance: any;

  compReady(event) {
  }

  ngOnInit() {}

}
