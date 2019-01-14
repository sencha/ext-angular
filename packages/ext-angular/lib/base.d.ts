import { ElementRef, QueryList, SimpleChanges } from '@angular/core';
export declare class base {
    private metaData;
    hostComponent: base;
    ext: any;
    private _nativeElement;
    private _hostComponent;
    private _extChildren;
    constructor(nativeElement: any, metaData: any, hostComponent: base);
    baseOnInit(metaData: any): void;
    ngOnDestroy(): void;
    _items: QueryList<any>;
    _elRefItems: QueryList<ElementRef>;
    baseAfterContentInit(): void;
    addTheChild(parentCmp: any, childCmp: any): void;
    items: QueryList<any>;
    items2: QueryList<ElementRef>;
    baseAfterContentInitOrig(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
