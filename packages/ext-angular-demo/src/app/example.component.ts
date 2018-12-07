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
                                  <menuradioitem #item text="Mobile" name="ui-type" group="group1"></menuradioitem>
                                  <menuradioitem #item text="Desktop" name="ui-type" group="group1"></menuradioitem>
                              </menu>
                          </button>
                      </container>
   
  `
})
export class AppComponent {
}
