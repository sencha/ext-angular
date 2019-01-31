import { Component, ViewEncapsulation } from '@angular/core'
import { VERSION } from '@angular/core';
@Component({
  selector: 'ext-angular-root',
  styles:[require('./app.component.css').toString()],
  template: `
  <panel layout="fit" [fullscreen]="true" [weighted]="true">
    <titlebar docked="top" [weight]="10">
      <container align="left">
          <span #extitem>
            <span class="ext ext-sencha" [style]="{margin: '0 5px 0 7px', fontSize: '20px', width: '20px'}"></span>
            <span extjs href="#" class="app-title">Sencha ExtAngular 6.7 Kitchen Sink - Angular v{{ANGULAR_VERSION}}</span>
          </span>
      </container>
    </titlebar>
    <container><span #extitem>
        <button-component></button-component>
    </span></container>
  </panel>
  `
})
export class AppComponent {
  ANGULAR_VERSION: any = VERSION.full
  showTreeFlag: any = false
  toggleTree = function(){
    this.showTreeFlag = !this.showTreeFlag;
  }

  theHtml = `
  <span class="ext ext-sencha" [style]="{margin: '0 5px 0 7px', fontSize: '20px', width: '20px'}"></span>
  <a extjs href="#" class="app-title">ExtAngular Kitchen Sink - Angular v{{ANGULAR_VERSION}}</a>
  `

  divData = '124'
  divData2 = '<div>\"456\'</div>'

  clickContact = (event) => {
    console.log(event._text)
    this.divData = '<div>456</div>'

    this.people = [
      {
        "name": "Day  Meyers",
        "age": 21
      },
      {
        "name": "Cook  Tyson",
        "age": 32
      }
    ]
  }

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35
    },
    {
      "name": "Mcleod  Mueller",
      "age": 28
    },
    {
      "name": "Day  Meyers",
      "age": 21
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34
    },
    {
      "name": "Cook  Tyson",
      "age": 32
    }
  ]
}

// <panel #item [layout]="'fit'" [fitToParent]="true"
// [bodyStyle]="'backgroundSize: 20px 20px;backgroundColor: #e8e8e8;backgroundImage: linear-gradient(0deg, #f5f5f5 1.1px, transparent 0), linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)'"
// >
// <titlebar #item
//     [docked]="'top'"
//     [shadow]="true"
//     [flex]="1"
//   >
//     <button #item [selfAlign]="'left'" [iconCls]="'x-fa fa-bars'"></button>
//     <container #item [layout]="'hbox'">
//       <div #item class="ext ext-sencha" [style]="{margin: '0 5px 0 7px', fontSize: '20px', width: '20px'}"></div>
//       <a #item href="#" class="app-title">ExtAngular Kitchen Sink - Angular v{{ANGULAR_VERSION}}</a>
//     </container>
//   </titlebar>
// </panel>



// <container #item [layout]="'hbox'">
// <div #item class="ext ext-sencha" [style]="{margin: '0 5px 0 7px', fontSize: '20px', width: '20px'}"></div>
// </container>

// <!--

// <a #item href="#" class="mjg">ExtAngular Kitchen Sink - Angular v{{ANGULAR_VERSION}}</a>



// <h4>NgIf</h4>
// <ul *ngFor="let person of people">
//   <li>start</li>
//   <li *ngIf="person.age < 30"> (1)
//   {{ person.name }} ({{ person.age }})
//   </li>
// </ul>
// [layout]="'hbox'"

// <div style="margin-top:100px;">
//   <div>1</div>
//   <div *ngFor="let person of people">{{person.name}}</div>
//   <div>3</div>
// </div>

// <container #item [fitToParent]="true">
//   <container #item [html]="'<div>%22456%27</div>'"></container>
//   <button #item [handler]="clickContact" *ngFor="let person of people" [text]=person.name></button>
// </container>




// <container #item [fitToParent]="true">
//   <div #item *ngFor="let person of people">hello</div>
//   <div #item>hello</div>
// </container>

// <button  [handler]="clickContact" *ngFor="let person of people" [text]=person.name></button>

// <container [html]="divData"></container>

// <container [html]="divData"></container>
// <button [handler]="clickContact" [text]="'b'"></button>
// <container [layout]="'hbox'" [fitToParent]="true">
// <button [handler]="clickContact" [text]="'hi'"></button>
// <div>hello</div>
// <button [handler]="clickContact" *ngFor="let person of people" [text]=person.name></button>

// </container>
// -->