//declare var Ext: any
//import { Inject, NgModule, ModuleWithProviders } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
//import { ExtAngularGridModule } from '@sencha/ext-angular-grid';
import { ExtGridComponent } from '@sencha/ext-angular/esm5/src/ext-grid.component';

import { AppComponent } from './app.component'

@NgModule({
    declarations:    [
        AppComponent,
        ExtGridComponent
    ],
    imports:         [
        BrowserModule,
        //ExtAngularGridModule
    ],
    providers:       [],
    bootstrap:       [
        AppComponent
    ]
//   entryComponents: [AppComponent],
//   bootstrap:       [ExtAngularBootstrapComponent]
})
export class AppModule {

    constructor() {
        //console.log(ExtAngularGridModule)
        //console.log(BrowserModule)
    }

}
