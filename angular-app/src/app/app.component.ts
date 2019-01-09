import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  ville = '';
  messages: {text: string, date: Date}[] = [];

  onKeyUp(event: Event) {
    const inputText = <HTMLInputElement> event.target;
    this.ville = inputText.value;
  }

  onMessage(msg: string) {
    this.messages.push({
      text: msg,
      date: new Date()
    });
  }

  onDelete(index: number) {
    this.messages.splice(index, 1);
  }
}
