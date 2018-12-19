declare var Ext: any
import { Component, NgModule, ModuleWithProviders } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { ExtAngularModernModule } from '@sencha/ext-angular-modern'
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import { NavMenuComponent } from './NavMenu/navmenu.component';
import { ExtAngularService } from './ext-angular.service';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

@Component({
  selector: 'app-root',
  template: ``,
})
export class App {
  constructor(private ExtAngularService: ExtAngularService) {
    this.ExtAngularService.appendComponentToViewport(AppComponent);
  }
}

@NgModule({
  imports: [BrowserModule, ExtAngularModernModule, routingModule],
  declarations: [App, AppComponent, HomeComponent, AboutComponent, NavMenuComponent],
  providers: [ExtAngularService],
  entryComponents: [AppComponent, AppComponent],
  bootstrap: [App]
})
export class AppModule { }
