import { Component } from '@angular/core';

@Component({
  // The selector instructs Angular to instantiate the AppComponent whenever it finds a corresponding app-root tag
  // the app-root tag <app-root></app-root> is in index.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // this is displayed using {{}} interpolation in app.component.html
  title = 'List';
}
