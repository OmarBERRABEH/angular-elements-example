import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WidgetComponent } from './widget.component';
@NgModule({
    imports: [BrowserModule],
    declarations: [WidgetComponent],
    entryComponents: [WidgetComponent]
})
export class WidgetModule {
    ngDoBootstrap() {}
}
