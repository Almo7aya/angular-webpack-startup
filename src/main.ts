import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import AppModule from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(console.log).catch(console.error);
