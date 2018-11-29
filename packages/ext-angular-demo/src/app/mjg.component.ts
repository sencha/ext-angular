import { Component } from '@angular/core'

@Component({
  selector: 'mjg',
  styles: [`
 `],
  template: `
mjg

<button
  [handler]="changeContacts"
  [text]="'changeContacts'">
</button>




<p>
  `
})
export class MjgComponent {

  changeContacts = (event) =>  {
    console.log('changeContacts')
  }
}
