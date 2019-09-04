import { QueryList, SimpleChanges } from '@angular/core';
export declare class base {
    private metaData;
    hostComponent: base;
    ext: any;
    private _nativeElement;
    private _hostComponent;
    private _extChildren;
    private q;
    constructor(nativeElement: any, metaData: any, hostComponent: base);
    baseOnInit(metaData: any): void;
    _extroute: any;
    _extroutes: QueryList<any>;
    _extitem: any;
    _extitems: QueryList<any>;
    baseAfterContentInit(): void;
    addTheChild(parentCmp: any, childCmp: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
