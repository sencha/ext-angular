import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'ext-angular-root',
  styles: [``],
  template: `
  <!--
  <h4>NgIf</h4>
  <ul *ngFor="let person of people">
    <li>start</li>
    <li *ngIf="person.age < 30"> (1)
    {{ person.name }} ({{ person.age }})
    </li>
  </ul>
  [layout]="'hbox'"

  <div style="margin-top:100px;">
    <div>1</div>
    <div *ngFor="let person of people">{{person.name}}</div>
    <div>3</div>
  </div>

  <container #item [fitToParent]="true">
    <container #item [html]="'<div>%22456%27</div>'"></container>
    <button #item [handler]="clickContact" *ngFor="let person of people" [text]=person.name></button>
  </container>


  -->

  <container #item [fitToParent]="true">
    <div #item *ngFor="let person of people">hello</div>
    <div #item>hello</div>
 </container>


<!--
<button  [handler]="clickContact" *ngFor="let person of people" [text]=person.name></button>
 
<container [html]="divData"></container>

<container [html]="divData"></container>
<button [handler]="clickContact" [text]="'b'"></button>
<container [layout]="'hbox'" [fitToParent]="true">
  <button [handler]="clickContact" [text]="'hi'"></button>
  <div>hello</div>
  <button [handler]="clickContact" *ngFor="let person of people" [text]=person.name></button>

</container>
-->




  `
})
export class AppComponent {
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
