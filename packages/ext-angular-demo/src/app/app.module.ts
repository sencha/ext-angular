import {
  Component,
  NgModule,
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { ExtAngularModernModule } from '@sencha/ext-angular-modern'
import { AppComponent } from './app.component'

@Injectable()
export class DomService {
  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private appRef: ApplicationRef,
      private injector: Injector
  ) {}

  appendComponentToBody(component: any) {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector)
    this.appRef.attachView(componentRef.hostView)
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement
    var root = document.getElementsByClassName('x-viewport-body-el')[0]
    root.appendChild(domElem)
  }
}

@Component({
  selector: 'app-root',
  template: ``,
})
export class App {
  constructor(private domService: DomService) {
    this.domService.appendComponentToBody(AppComponent);
  }
}

@NgModule({
  imports: [ BrowserModule, ExtAngularModernModule ],
  declarations: [ App, AppComponent ],
  bootstrap: [ App ],
  providers: [ DomService ],
  entryComponents: [ AppComponent]
})
export class AppModule {}