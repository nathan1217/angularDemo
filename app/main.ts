import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyAppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(MyAppModule);