            //@example packages=[angular]
            import { Component } from '@angular/core'
            declare var Ext: any;

            @Component({
                selector: 'app-root-1',
                styles: [`
                        `],
                template: `
                    <container #item layout="center">
                        <formpanel #item shadow="true">
                            <fieldset #item title="About You" instructions="Tell us about yourself." width="300">
                                <textfield #item label="First Name" labelAlign="placeholder"></textfield>
                                <textfield #item label="Last Name" labelAlign="placeholder"></textfield>
                            </fieldset>
                        </formpanel>
                    </container>
                        `
            })
            export class AppComponent {
            }