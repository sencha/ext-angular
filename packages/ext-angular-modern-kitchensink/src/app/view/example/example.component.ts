            //@example packages=[angular]
            import { Component } from '@angular/core'
            declare var Ext: any;

            @Component({
                selector: 'app-root-1',
                styles: [`
                        `],
                template: `
                                 <container #item>
                                     <toolbar #item>
                                        <container #item>
                                            <div #item [style]="{marginRight: '10px'}">Default UI:</div>
                                         </container>
                                         <segmentedbutton #item>
                                             <button #item pressed text="Low"></button>
                                             <button #item text="Medium"></button>
                                             <button #item text="High"></button>
                                         </segmentedbutton>
                                     </toolbar>
                                     <toolbar #item margin="0 0 20 0">
                                        <container #item>
                                            <div #item [style]="{marginRight: '10px'}">Toolbar UI:</div>
                                        </container>
                                         <segmentedbutton #item>
                                             <button #item ui="default-toolbar" pressed text="Low"></button>
                                             <button #item ui="default-toolbar" text="Medium"></button>
                                             <button #item ui="default-toolbar" text="High"></button>
                                         </segmentedbutton>
                                     </toolbar>
                                 </container>
                        `
            })
            export class AppComponent {
            }