import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-hello',
    styleUrls: ['./hello.component.scss'],
    templateUrl: './hello.component.html'
})
export class HelloComponent {
    show = true;
    @Input() title = 'Le titre de mon composent';
}
