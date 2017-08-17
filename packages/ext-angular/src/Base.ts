import { 
    Component, 
    Input, 
    SimpleChanges, 
    forwardRef, 
    ViewChildren, 
    QueryList, 
    ContentChildren, 
    ViewChild, 
    ComponentFactoryResolver,
    ViewContainerRef,
    ElementRef,
    OnInit,
    OnDestroy,
    Inject
} from '@angular/core';

@Component({
    selector: 'x-component',
    ...Base.componentProps
})
export default class Base implements OnInit {

    static componentProps = {
        template: `
            <ng-template #dynamic></ng-template>
        `
    }

    @ViewChild('dynamic') dynamic;
    @ContentChildren(Base) children: QueryList<Base>;
    @Input() text:string

    cmp: any;

	constructor(
		private myElement: ElementRef, 
		private componentFactoryResolver: ComponentFactoryResolver, 
        private viewContainerRef: ViewContainerRef
    ) {
    }

    ngOnChanges(changes: SimpleChanges) {
        // console.log('changes', changes);
        // debugger;
    }

    ngAfterViewInit() {
        // console.log('children', this.children);
    }

    ngAfterContentInit() {
        this.cmp = this.createExtJSComponent();

        if (this.myElement.nativeElement.parentNode) {
            this.myElement.nativeElement.appendChild(this.cmp);
        } 

        for (let child of this.children.toArray()) {
            if (child !== this) {
                this.cmp.appendChild(child.cmp);
            }
        }
    }

    ngOnInit() {
    }

    ngAfterContentChecked() {
        for (let child of this.children.toArray()) {
            if (child !== this) {
                console.log('append', child.cmp);
                this.cmp.appendChild(child.cmp);
            }
        }
    }

    ngOnDestroy() {
        console.log('destroy', this.constructor.name);
        this.cmp.parentNode.removeChild(this.cmp);
    }

    createExtJSComponent() {
        let cmp = document.createElement('fieldset');
        let legend = document.createElement('legend');
        legend.innerHTML = this.constructor.name;
        cmp.innerHTML = this.text;
        cmp.appendChild(legend);
        return cmp;
    }

}
