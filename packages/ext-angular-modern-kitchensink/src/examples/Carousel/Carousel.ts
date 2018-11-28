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
    console.log('############33', event.ext);
    this.carouselInstance = event.ext;
    this.carouselInstance.setData('items', this.carouselItems);
    console.log('@@@@@@@@@@', this.carouselInstance);
  }
  
  carouselItems:any = [
    {html: "<div>Swipe left to show the next card...</div>"},
    {html: "<div #item [flex]=\"1\">You can also tap on either side of the indicators.</div>"},
    {html: "<div #item [flex]=\"1\">Card #3</div>"} 
  ]

  ngOnInit() {}

}
