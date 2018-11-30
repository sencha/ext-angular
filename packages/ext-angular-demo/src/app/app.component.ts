import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'ext-angular-root',
  styles: [`

  input[type="button" i], input[type="submit" i], input[type="reset" i], input[type="file" i]::-webkit-file-upload-button, button {
    border-color: none;
    border-style: none;
    border-width: 0px;
    padding: 0px;
}

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }

  .breadcrumb {
    height: 50px;
    width: 100%;
    background: white;
    list-style: none;
    padding-left: 10px;
    padding-top: 10px;
    }
    .breadcrumb li {
      float:left;
    }

    .aStyle {
      color: red;
    }

  `],
  // https://angular.io/api/core/ViewEncapsulation#None
  encapsulation: ViewEncapsulation.None,
  template: `
  <container #item [layout]="'hbox'" [fitToParent]="true">
  <mjg #item></mjg>
  <button #item [text]="'click'" [cls]="'aStyle'"></button>
  <titlebar #item [docked]="'top'" [shadow]="true" [style]="{'z-index': 2}">
    <button #item [selfAlign]="'left'" [iconCls]="'x-fa fa-bars'" (tap)="toggleTree()"></button>
    <container #item [layout]="'hbox'">
      <div #item class="ext ext-sencha" [style]="{margin: '0 5px 0 7px', fontSize: '20px', width: '20px'}"></div>
      <a href="#" #item class="app-title">ExtAngular Modern Kitchen Sink - Angular v{{ANGULAR_VERSION}}</a>
    </container>
  </titlebar>
</container>




<!--

<mjg></mjg>

<panel [title]="'mjg'" #item>
<mjg #item></mjg>
<div #item>theDiv</div>
</panel>


<div *ngFor="let contact of contacts;">
  <div>{{contact.name}}</div>
</div>

<panel [title]="'title'" #item *ngFor="let contact of contacts; let lastItem = last;">
<div #item>{{contact.name}}</div>
</panel>

<button
  [handler]="changeContacts"
  [text]="'changeContacts'">
</button>


<container #item>
<div #item>hi</div>
</container>




<container #item *ngFor="let contact of contacts; let lastItem = last;">
<div #item>container</div>
</container>


    <ul class="breadcrumb">
      <li *ngFor="let contact of contacts; let lastItem = last;">
          <button
            [width]="'100px'"
            [handler]="clickContact"
            [text]="contact.name">
          </button>
          <span style="color:red;xwidth:1px;xpadding-left:1px;" *ngIf="!lastItem">></span>
      </li>
    </ul>


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
-->
  `
})
export class AppComponent {
  somedata = 'this is the original text'
  changed = false

  changeContacts = (event) =>  {
    if (this.changed == false) {
      this.contacts = this.contacts1
    }
    else {
      this.contacts = this.contacts2
    }
    this.changed = !this.changed
    // console.log(this.contacts)
    // this.contacts = this.contacts2
    // console.log('changeContacts')
    // console.log(this.contacts)
  }



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
    }
  ]

  contacts1: any[] = [
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
