import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef
  } 
from '@angular/core'
@Injectable({
  providedIn: 'root'
})
export class ExtAngularBootstrapService {
  bootstrapComponent: any
  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private appRef: ApplicationRef,
      private injector: Injector
  ) {}
   appendComponentToViewport() {
     //console.log("In appendComponentToViewport")
    if(!this.bootstrapComponent) {
        throw new Error("Bootstrap component not set. Please use extAngularService.setBootStrapComponent(yourComponent) to setup bootstrap component from your root module constructor")
    }
    //console.log("bootstrapComponent : " + this.bootstrapComponent)
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(this.bootstrapComponent)
      .create(this.injector)
    this.appRef.attachView(componentRef.hostView)
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement
    var root = document.getElementsByClassName('x-viewport-body-el')[0]
    root.appendChild(domElem)
  }
  setBootStrapComponent(component:any) {
    //console.log("In setBootStrapComponent")
    this.bootstrapComponent = component
  }
}