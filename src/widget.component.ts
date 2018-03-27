import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'custom-widget',
    templateUrl: 'widget.component.html',
    encapsulation: ViewEncapsulation.Native
})
export class WidgetComponent {
    @Input() range: number;
    @Output() changeRange: EventEmitter<number> =  new EventEmitter();

    onChange(value: number) {
        this.changeRange.emit(value);
    }
}
