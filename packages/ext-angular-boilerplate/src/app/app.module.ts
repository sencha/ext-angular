declare var Ext: any
import { Inject, NgModule, ModuleWithProviders } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Route, RouterModule } from '@angular/router'

//import { ExtAngularModule } from './ext-angular-prod/ext-angular.module';

import { ExtContainerComponent } from '@sencha/ext-angular/esm5/src/ext-container.component';
import { ExtTitlebarComponent } from '@sencha/ext-angular/esm5/src/ext-titlebar.component';
import { ExtButtonComponent } from '@sencha/ext-angular/esm5/src/ext-button.component';
import { ExtPanelComponent } from '@sencha/ext-angular/esm5/src/ext-panel.component';
import { ExtTreelistComponent } from '@sencha/ext-angular/esm5/src/ext-treelist.component';
import { ExtGridComponent } from '@sencha/ext-angular/esm5/src/ext-grid.component';
import { ExtToolbarComponent } from '@sencha/ext-angular/esm5/src/ext-toolbar.component';
import { ExtSearchfieldComponent } from '@sencha/ext-angular/esm5/src/ext-searchfield.component';
import { ExtColumnComponent } from '@sencha/ext-angular/esm5/src/ext-column.component';

import { ExtAngularBootstrapService } from '@sencha/ext-angular/esm5/src/ext-angular-bootstrap.service';
import { ExtAngularBootstrapComponent } from '@sencha/ext-angular/esm5/src/ext-angular-bootstrap.component';

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
  imports:         [BrowserModule, routingModule],
  declarations:    [
        ExtAngularBootstrapComponent,
        AppComponent,
        HomeComponent,
        AboutComponent,
        NavMenuComponent,

        ExtContainerComponent,
        ExtTitlebarComponent,
        ExtButtonComponent,
        ExtPanelComponent,
        ExtTreelistComponent,
        ExtGridComponent,
        ExtToolbarComponent,
        ExtSearchfieldComponent,
        ExtColumnComponent
    ],
  providers:       [ExtAngularBootstrapService],
  entryComponents: [AppComponent],
  bootstrap:       [ExtAngularBootstrapComponent]
})
export class AppModule {

  constructor(@Inject(ExtAngularBootstrapService) extAngularService : ExtAngularBootstrapService) {
    extAngularService.setBootStrapComponent(AppComponent)
  }
}
