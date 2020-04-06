import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExtAngularModernModule } from '@sencha/ext-angular-modern'

import { AppComponent }             from './app.component';
import { ButtonComponent }          from "../examples/Button/Button";
import { SplitButtonComponent }     from "../examples/SplitButton/SplitButton";
import { SegmentedButtonComponent } from "../examples/SegmentedButton/SegmentedButton";

interface ExtAngularRoute extends Route {
  text?: string;
  iconCls?: string;
  xtype?: string;
  leaf?: boolean;
}
const routes : ExtAngularRoute[] = [
  { path: 'frame-index.html', redirectTo: '/', pathMatch: 'full' },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'components/buttons/button', component: ButtonComponent, text: 'Button', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/buttons/splitbutton', component: SplitButtonComponent, text: 'Button', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  { path: 'components/buttons/segmentedbutton', component: SegmentedButtonComponent, text: 'Button', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SplitButtonComponent,
    SegmentedButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ExtAngularModernModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
