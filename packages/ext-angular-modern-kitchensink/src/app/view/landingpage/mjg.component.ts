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

<panel [title]="'title'" #item >
<div #item>hi</div>
</panel>




<p>
  `
})
export class MjgComponent {

  changeContacts = (event) =>  {
    console.log('changeContacts')
  }
}
