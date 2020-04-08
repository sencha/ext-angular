import { NgModule, ModuleWithProviders } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Route, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { HomeComponent } from './Home/home.component'
import { AboutComponent } from './About/about.component'
import { NavMenuComponent } from './NavMenu/navmenu.component'
import '../themer.ts'
import { ExtAngularModernModule } from '@sencha/ext-angular-modern';

// import { ExtPanelComponent } from '@sencha/ext-angular-modern/lib/ExtPanel';
// import { ExtContainerComponent } from '@sencha/ext-angular-modern/lib/ExtContainer';
// import { ExtTitlebarComponent } from '@sencha/ext-angular-modern/lib/ExtTitlebar';
// import { ExtButtonComponent } from '@sencha/ext-angular-modern/lib/ExtButton';
// import { ExtTreelistComponent } from '@sencha/ext-angular-modern/lib/ExtTreelist';
// import { ExtGridComponent } from '@sencha/ext-angular-modern/lib/ExtGrid';

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
    // ExtPanelComponent,
    // ExtContainerComponent,
    // ExtTitlebarComponent,
    // ExtButtonComponent,
    // ExtTreelistComponent,
    // ExtGridComponent
  ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {
  }
