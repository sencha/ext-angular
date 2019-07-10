declare var Ext: any
import { Inject, NgModule, ModuleWithProviders } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Route, RouterModule } from '@angular/router'

import { ExtAngularModule } from '@sencha/ext-angular';
import { ExtAngularBootstrapService } from '@sencha/ext-angular/esm5/lib/ext-angular-bootstrap.service';
import { ExtAngularBootstrapComponent } from '@sencha/ext-angular/esm5/lib/ext-angular-bootstrap.component';

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
  imports:         [BrowserModule, ExtAngularModule, routingModule],
  declarations:    [ExtAngularBootstrapComponent, AppComponent, HomeComponent, AboutComponent, NavMenuComponent],
  providers:       [ExtAngularBootstrapService],
  entryComponents: [AppComponent],
  bootstrap:       [ExtAngularBootstrapComponent]
})
export class AppModule {

  constructor(@Inject(ExtAngularBootstrapService) extAngularService : ExtAngularBootstrapService) {
    extAngularService.setBootStrapComponent(AppComponent)
  }
}
