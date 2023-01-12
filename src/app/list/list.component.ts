import { Component } from '@angular/core';

@Component({
  // This (and the other files) was created by running 'ng generate component list' in the project directory
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  name = 'Emily';
  items = [
    { note: 'item 1' },
    { note: 'item 2' },
    { note: 'item 3' },
    { note: 'item 4' },
    { note: 'item 5' },
    { note: 'item 6' },
  ];
}
