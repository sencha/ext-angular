import { NgModule, ModuleWithProviders } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Route, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { HomeComponent } from './Home/home.component'
import { AboutComponent } from './About/about.component'
import { NavMenuComponent } from './NavMenu/navmenu.component'
import '../themer.ts'
import { ExtAngularModernModule } from '@sencha/ext-angular-modern';

const routes: Route[] = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent }
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
