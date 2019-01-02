import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'ext-angular-root',
  styles: [``],
  template: `
  <h4>NgIf</h4>
  <ul *ngFor="let person of people">
    <li *ngIf="person.age < 30"> (1)
    {{ person.name }} ({{ person.age }})
    </li>
  </ul>



  <container #item [layout]="'fit'" [fitToParent]="true">
    <button #item  [handler]="clickContact" *ngFor="let person of people" [text]=person.name></button>
  </container>
  `
})
export class AppComponent {

  clickContact = (event) => {
    console.log(event._text)

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
