import {AppModule} from "./app/app.module"
import { ExtAngularLaunchComponent } from '@sencha/ext-angular/esm5/lib/ext-angular-launch.component'

var launch = new ExtAngularLaunchComponent
launch.bootstrapModule(AppModule)
