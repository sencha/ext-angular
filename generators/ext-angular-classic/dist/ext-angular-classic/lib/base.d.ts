import { ElementRef, QueryList, SimpleChanges } from '@angular/core';
export declare class base {
    private metaData;
    ext: any;
    private _nativeElement;
    constructor(el: ElementRef, metaData: any);
    ngOnChanges(changes: SimpleChanges): void;
    baseOnInit(metaData: any): void;
    items: QueryList<any>;
    items2: QueryList<ElementRef>;
    baseAfterContentInit(): void;
    itemsa: QueryList<ElementRef>;
    baseAfterContentInit2(): void;
}
