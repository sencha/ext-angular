import { Injector, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
export declare class ExtAngularBootstrapService {
    private componentFactoryResolver;
    private appRef;
    private injector;
    bootstrapComponent: any;
    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, injector: Injector);
    appendComponentToViewport(): void;
    setBootStrapComponent(component: any): void;
}
