import { enableProdMode } from '@angular/core'
import { bootstrapModule } from '@sencha/ext-angular/esm5/lib/ext-angular-bootstrap.component';
import {AppModule} from './app/app.module';
import { environment } from './environments/environment'

if (environment.production) {enableProdMode()}
enableProdMode();bootstrapModule( AppModule );