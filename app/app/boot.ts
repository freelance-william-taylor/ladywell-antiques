// Shims + Deps
import "reflect-metadata";
import "core-js/shim";
import "zone.js/dist/zone";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './modules/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

