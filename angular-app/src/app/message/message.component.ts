import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageComponent {
    @Input('maxSize') maxChars = 10;
    @Output() textEvent = new EventEmitter<string>();

    text = '';

    onSend() {
        if (this.text.trim()) {
            this.textEvent.emit(this.text);
            this.text = '';
        }
    }
}
