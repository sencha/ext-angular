import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExtAngularModule } from '@gusmano/ext-angular-modern/main';
//import { ExtAngularModule } from '@gusmano/ext-angular-classic/main';

@NgModule({
  declarations: [
		AppComponent,
  ],
  imports: [
		BrowserModule,
		ExtAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
