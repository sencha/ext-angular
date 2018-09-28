import { ElementRef, QueryList, SimpleChanges } from '@angular/core';
export declare class base {
    private metaData;
    ext: any;
    private _nativeElement;
    constructor(el: ElementRef, metaData: any);
    OnChanges(changes: SimpleChanges): void;
    verb: any;
    ngOnChanges(changes: SimpleChanges): void;
    baseOnInit(metaData: any): void;
    extChildren: QueryList<any>;
    allChildren: QueryList<any>;
    baseAfterContentInit(): void;
}
