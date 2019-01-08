import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  ville = '';

  onKeyUp(event: Event) {
    const inputText = <HTMLInputElement> event.target;
    this.ville = inputText.value;
  }

}
