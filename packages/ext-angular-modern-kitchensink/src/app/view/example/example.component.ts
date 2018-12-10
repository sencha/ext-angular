            //@example packages=[angular]
            import { Component } from '@angular/core'
            declare var Ext: any;

            @Component({
                selector: 'app-root-1',
                styles: [`
                        `],
                template: `
                        <list #item 
                            [store]="this.store"
                            [itemTpl]="this.itemTpl"
                        >
                        <button #item 
                              scrollDock="bottom"
                              docked="bottom"
                              text="load more..."
                          ></button>
                        </list>
                        `
            })
            export class AppComponent {
                store = new Ext.data.Store({
                    data: [{
                        firstName: 'Peter',
                        lastName: 'Venkman'
                    },
                    {
                        firstName: 'Raymond',
                        lastName: 'Stantz'
                    },
                    {
                        firstName: 'Egon',
                        lastName: 'Spengler'
                    },
                    {
                        firstName: 'Winston',
                        lastName: 'Zeddemore'
                    }]
                });

                itemTpl = "{firstName} {lastName}";
            }