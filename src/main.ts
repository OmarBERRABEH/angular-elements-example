import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { WidgetModule } from './widget.module';
import { WidgetComponent } from './widget.component';

let injector: Injector;

platformBrowserDynamic()
    .bootstrapModule(WidgetModule)
    .then(ref => {
        console.log('HelloModule boostraped');
        injector = ref.injector;
        const ngElementConstructor = createCustomElement(WidgetComponent, {
            injector
        });
        customElements.define('custom-widget', ngElementConstructor);
    });
