import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExtPanelComponent } from '@sencha/ext-angular/esm5/src/ext-panel.component';
import { ExtGridComponent } from '@sencha/ext-angular/esm5/src/ext-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ExtPanelComponent,
    ExtGridComponent
  ],
  imports: [
    BrowserModule,
    //ExtAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }