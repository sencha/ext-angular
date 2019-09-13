
import { NgModule } from '@angular/core';

import {GroupedListComponent} from '../examples/Lists/GroupedList/GroupedList';
import {BasicGridComponent} from '../examples/Grid/BasicGrid/BasicGrid';

@NgModule({
    declarations: [
        GroupedListComponent,
        BasicGridComponent
    ],
    exports: [
        GroupedListComponent,
        BasicGridComponent
    ]
})
export class SharedModule { }
