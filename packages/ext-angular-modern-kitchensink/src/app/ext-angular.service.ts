import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef
  } 
  from '@angular/core'
@Injectable()
export class ExtAngularService {
  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private appRef: ApplicationRef,
      private injector: Injector
  ) {}
  appendComponentToViewport(component: any) {
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