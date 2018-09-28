import { QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab.component';
export declare class TabsComponent implements AfterContentInit {
    tabs: QueryList<TabComponent>;
    ngAfterContentInit(): void;
    selectTab(tab: TabComponent): void;
}
