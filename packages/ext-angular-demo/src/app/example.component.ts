import { Component } from '@angular/core'
declare var Ext: any;

@Component({
  selector: 'app-root',
  styles: [`
 `],
  template: `
                      <container #item>
                          <button #item text="Menu">
                              <menu #item rel="menu" >
                                  <menuitem #item text="Mobile" name="ui-type" ></menuitem>
                                  <menuitem #item text="Desktop" name="ui-type"></menuitem>
                              </menu>
                          </button>
                      </container>
   
  `
})
export class AppComponent {
}
