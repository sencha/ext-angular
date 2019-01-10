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
    items: QueryList<any>;
    items2: QueryList<ElementRef>;
    baseAfterContentInit(): void;
    _items: QueryList<any>;
    _elRefItems: QueryList<ElementRef>;
    baseAfterContentInitngFor(): void;
    ngOnChanges(changes: SimpleChanges): void;
    itemsa: QueryList<any>;
    baseAfterContentInit3(): void;
}
