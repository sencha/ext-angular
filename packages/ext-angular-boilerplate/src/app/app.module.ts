declare var Ext: any
import { Inject, NgModule, ModuleWithProviders } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Route, RouterModule } from '@angular/router'


//import { ExtAngularModule } from './ext-angular-prod/ext-angular.module';
declare var Ext: any;
import { ExtAngularModule } from '@sencha/ext-angular';



// import { ExtContainerComponent } from '@sencha/ext-angular-all/lib/ext-container.component';
// import { ExtTitlebarComponent } from '@sencha/ext-angular-all/lib/ext-titlebar.component';
// import { ExtButtonComponent } from '@sencha/ext-angular-all/lib/ext-button.component';
// import { ExtPanelComponent } from '@sencha/ext-angular-all/lib/ext-panel.component';
// import { ExtTreelistComponent } from '@sencha/ext-angular-all/lib/ext-treelist.component';
// import { ExtGridComponent } from '@sencha/ext-angular-all/lib/ext-grid.component';
// import { ExtToolbarComponent } from '@sencha/ext-angular-all/lib/ext-toolbar.component';
// import { ExtSearchfieldComponent } from '@sencha/ext-angular-all/lib/ext-searchfield.component';
// import { ExtColumnComponent } from '@sencha/ext-angular-all/lib/ext-column.component';

//import { ExtAngularBootstrapService } from '@sencha/ext-angular-all/lib/ext-angular-bootstrap.service';
//import { ExtAngularBootstrapComponent } from '@sencha/ext-angular-all/lib/ext-angular-bootstrap.component';

import { AppComponent } from './app.component'
import { HomeComponent } from './Home/home.component'
import { AboutComponent } from './About/about.component'
import { NavMenuComponent } from './NavMenu/navmenu.component'


const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
]
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});

@NgModule({
  imports:         [BrowserModule, routingModule, ExtAngularModule],
  declarations:    [
        //ExtAngularBootstrapComponent,
        AppComponent,
        HomeComponent,
        AboutComponent,
        NavMenuComponent,

        // ExtContainerComponent,
        // ExtTitlebarComponent,
        // ExtButtonComponent,
        // ExtPanelComponent,
        // ExtTreelistComponent,
        // ExtGridComponent,
        // ExtToolbarComponent,
        // ExtSearchfieldComponent,
        // ExtColumnComponent
    ],
    providers: [],
    entryComponents: [AppComponent]
    //bootstrap: [AppComponent]
  })
  export class AppModule {
      ngDoBootstrap(app) {
          Ext.onReady(function () {
              console.log('ngDoBootstrap')
              app.bootstrap(AppComponent);
          });
     }
  }




//   providers:       [],
//   bootstrap:       [AppComponent]
// })
// export class AppModule {}
// // export class AppModule {

//     Ext.onReady(function() {


// //   constructor(@Inject(ExtAngularBootstrapService) extAngularService : ExtAngularBootstrapService) {
// //     extAngularService.setBootStrapComponent(AppComponent)
// //   }
// // }
