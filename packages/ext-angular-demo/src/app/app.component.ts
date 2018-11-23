import { Component } from '@angular/core'
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/of';

/**
 *    <button #item 
        (tap)="clickMe($event)" 
        [text]="somedata">
      </button>

  Buttont takes up whole screen even if it is insde vbox    
 */
@Component({
  selector: 'ext-angular-root',
  styles: [`

  input[type="button" i], input[type="submit" i], input[type="reset" i], input[type="file" i]::-webkit-file-upload-button, button {
    border-color: none;
    border-style: none;
    border-width: 0px;
    padding: 0px;
}





  .menu-outer {
    height: 50px;
    width: 100%;
    background: white;
  }
  
  .horizontal-list {
    list-style: none;
    padding-left: 0px;
    padding-top: 7px;
    }
    ul.horizontal-list li {
      padding-left: 20px;
      xwidth:150px;
      float:left;
    }
  `],
  template: `

  <div class="menu-outer">
    <ul class="horizontal-list">
      <li *ngFor="let contact of contacts; let lastItem = last;">
          <button
            [width]="'100px'"
            [handler]="clickContact"
            [text]="contact.name">
          </button>
          <span style="width:1px;padding-left:1px;" *ngIf="!lastItem">></span>
      </li>
    </ul>
  </div>

    <panel #item
      [title]="'Panel with children'"
      [layout]="'vbox'">

      <div #item data-qtip="'hi'" >root div<div>{{somedata}}</div></div>
      
      <button #item
        [flex]="'1'"
        [handler]="clickMe"
        [text]="somedata">
      </button>

      <button #item
        [flex]="'1'"
        [handler]="clickMe2.bind(this)"
        [text]="'clickMe2'">
      </button>

    </panel>








  `
})
export class AppComponent {
  somedata = 'this is the original text'

  clickContact = (event) => {
    console.log(event._text)
  }

  clickMe = (event) => {
    console.log('hey')
    console.log(event)
    this.somedata = 'now the text has changed ' + Date.now()
  }

  clickMe2(event) {
    this.contacts = this.contacts2
    console.log('hey from clickMe2')
    console.log(event)
    this.somedata = 'now the text has changed from clickMe2 ' + Date.now()
  }

  contacts: any[] = [
    {
      "id": 1,
      "name": "Laura",
      "email": "lbutler0@latimes.com",
      "age": 47
    },
    {
      "id": 2,
      "name": "Walt",
      "email": "wkelley1@goodreads.com",
      "age": 37
    },
    {
      "id": 3,
      "name": "Walter",
      "email": "wgutierrez2@smugmug.com",
      "age": 49
    },
    {
      "id": 4,
      "name": "Jesse",
      "email": "jarnold3@com.com",
      "age": 47
    },
    {
      "id": 5,
      "name": "Irene",
      "email": "iduncan4@oakley.com",
      "age": 33
    }
  ]

  contacts2: any[] = [
    {
      "id": 1,
      "name": "Laura",
      "email": "lbutler0@latimes.com",
      "age": 47
    },
    {
      "id": 2,
      "name": "Walter",
      "email": "wkelley1@goodreads.com",
      "age": 37
    },
  ]

}
