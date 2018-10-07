import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { AppComponent } from './app.component';

//ExtAngular
import { ExtAngularModernModule } from 'ext-angular-modern'

//services
//import { ExtClassComponent } from './ext-class.component';
import { AgencyService } from './service/agency.service';

//in main
import { ActionsComponent } from './view/main/sidebar/actions/actions.component';
import { DetailComponent } from './view/main/detail/detail.component';
import { FooterComponent } from './view/main/footer/footer.component';
import { HeaderComponent } from './view/main/header/header.component';
import { MainComponent } from './view/main/main.component';
import { MenuComponent } from './view/main/sidebar/menu/menu.component';
import { SideBarComponent } from './view/main/sidebar/sidebar.component';
import { WelcomeComponent } from './view/main/sidebar/welcome/welcome.component';

//menu
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { AgenciesComponent } from './view/agencies/agencies.component';
import { AnalyzeComponent } from './view/analyze/analyze.component';
import { SpendingDetailComponent } from './view/spendingdetail/spendingdetail.component';
import { CandidateCalendarsComponent } from './view/candidatecalendars/candidatecalendars.component';
import { ReportsComponent } from './view/reports/reports.component';
import { ChartComponent } from './view/chart/chart.component';
import { D3TreeListComponent } from './view/d3treelist/d3treelist.component';
import { WidgetGridComponent } from './view/widgetgrid/widgetgrid.component';
import { SimpleGridComponent } from './view/simplegrid/simplegrid.component';
import { BoilerplateComponent } from './view/boilerplate/boilerplate.component';
import { ConfiguratorComponent } from './view/configurator/configurator.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/simplegrid', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'agencies', component: AgenciesComponent },
	{ path: 'analyze', component: AnalyzeComponent },
	{ path: 'spendingdetail', component: SpendingDetailComponent },
	{ path: 'candidatecalendars', component: CandidateCalendarsComponent },
	{ path: 'reports', component: ReportsComponent },
	{ path: 'chart', component: ChartComponent },
	{ path: 'd3treelist', component: D3TreeListComponent },
	{ path: 'widgetgrid', component: WidgetGridComponent },
	{ path: 'simplegrid', component: SimpleGridComponent },
	{ path: 'boilerplate', component: BoilerplateComponent },
	{ path: 'configurator', component: ConfiguratorComponent }
];
export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
    BrowserModule,
    ExtAngularModernModule,
    routing
  ],
	declarations: [
    //ExtClassComponent,
    
		ActionsComponent,
		DetailComponent,
		FooterComponent,
		HeaderComponent,
		MainComponent,
		MenuComponent,
		SideBarComponent,
		WelcomeComponent,

		AgenciesComponent,
		AnalyzeComponent,
		BoilerplateComponent,
		CandidateCalendarsComponent,
		ChartComponent,
		ConfiguratorComponent,
		D3TreeListComponent,
		DashboardComponent,
		ReportsComponent,
		SimpleGridComponent,
		SpendingDetailComponent,
		WidgetGridComponent
	],
	providers: [
		AgencyService,
	],
	entryComponents: [
		WelcomeComponent, 
		MenuComponent, 
		ActionsComponent, 
		SideBarComponent, 
		FooterComponent, 
		ChartComponent
	],
	bootstrap: [MainComponent]
})
export class AppModule { }