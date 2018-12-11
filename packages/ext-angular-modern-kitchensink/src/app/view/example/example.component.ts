            //@example packages=[angular]
            import { Component } from '@angular/core'
            declare var Ext: any;

            @Component({
                selector: 'app-root-1',
                styles: [`
                        `],
                template: `
                        <container #item layout="hbox">
                            <panel #item title="Inner Panel 1" flex="1">
                                This is the inner panel content
                            </panel>
                            <panel #item title="Inner Panel 2" flex="1">
                                This is the inner panel content
                            </panel>
                        </container>
                        `
            })
            export class AppComponent {

             }