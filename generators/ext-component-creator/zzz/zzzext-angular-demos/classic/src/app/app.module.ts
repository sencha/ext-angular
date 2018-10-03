import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Routes, RouterModule } from '@angular/router';

import { ExtAngularModule } from '../ext-angular-classic';

import { AgencyService } from './service/agency.service';

//in main
import { ActionsComponent } from './view/main/actions.component';
import { DetailComponent } from './view/main/detail.component';
import { FooterComponent } from './view/main/footer.component';
import { HeaderComponent } from './view/main/header.component';
import { MainComponent } from './view/main/main.component';
import { MenuComponent } from './view/main/menu.component';
import { SideBarComponent } from './view/main/sidebar.component';
import { WelcomeComponent } from './view/main/welcome.component';

import { AnalyzeComponent } from './view/analyze/analyze.component';
import { SimpleGridComponent } from './view/simplegrid/simplegrid.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/simplegrid', pathMatch: 'full' },
	{ path: 'analyze', component: AnalyzeComponent },
	
//	{ path: 'inheritclient', component: InheritClientComponent },
//	{ path: 'dynamicclient', component: DynamicClientComponent },
	{ path: 'simplegrid', component: SimpleGridComponent },
];
export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
	imports: [
		BrowserModule,
//		xModule,
		ExtAngularModule,
//		ngcomponent,
		routing
	],
	exports: [
		//TabsClientComponent,
		//TabsComponent
	],
	declarations: [
		ActionsComponent,
		DetailComponent,
		FooterComponent,
		HeaderComponent,
		MainComponent,
		MenuComponent,
		SideBarComponent,
		WelcomeComponent,
		AnalyzeComponent,
		SimpleGridComponent,
	],
	providers: [
		AgencyService,
		//TabsClientComponent
	],
	entryComponents: [
		WelcomeComponent, 
		MenuComponent, 
		ActionsComponent, 
		SideBarComponent, 
		FooterComponent, 
		//OutletComponent
	],
	bootstrap: [MainComponent]
})
export class AppModule { }


