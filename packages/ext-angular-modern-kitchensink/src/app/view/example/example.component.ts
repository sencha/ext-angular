            //@example packages=[angular]
            import { Component } from '@angular/core'
            declare var Ext: any;

            @Component({
                selector: 'app-root-1',
                styles: [`
                        `],
                template: `
                        <panel #item shadow="true" [layout]="{type: 'vbox', align: 'stretch'}">
                            <button #item [handler]="alertHandler" text="Alert"></button>
                            <button #item [handler]="promptHandler" text="Prompt"></button>
                            <button #item [handler]="confirmHandler" text="Confirm"></button>
                        </panel>
                        `
            })
            export class AppComponent {

                         onConfirmResult = function(buttonId, value, opt) {
                             Ext.toast(`User clicked ${buttonId} button.`);
                         }
                
                         onPromptResult = function(buttonId, value) {
                             Ext.toast(`User clicked ${buttonId} and entered value "${value}".`);
                         }

                         alertHandler = () => Ext.Msg.alert('Title', 'The quick brown fox jumped over the lazy dog.');
                         promptHandler = () => Ext.Msg.prompt('Welcome!', "What's your first name?", this.onPromptResult.bind(this));
                         confirmHandler = () => Ext.Msg.confirm("Confirmation", "Are you sure you want to do that?", this.onConfirmResult.bind(this));
            }