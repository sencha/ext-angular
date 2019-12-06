import { NgModule, ModuleWithProviders } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Route, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { HomeComponent } from './Home/home.component'
import { AboutComponent } from './About/about.component'
import { NavMenuComponent } from './NavMenu/navmenu.component'

import { ExtAngularModernModule } from '@sencha/ext-angular-modern';

const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
]
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});

@NgModule({
  imports: [
    BrowserModule,
    routingModule,
    ExtAngularModernModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavMenuComponent
  ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {
  }
