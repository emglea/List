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
    { note: 'item 1', clicked: false },
    { note: 'item 2', clicked: false },
    { note: 'item 3', clicked: false },
    { note: 'item 4', clicked: false },
    { note: 'item 5', clicked: false },
    { note: 'item 6', clicked: false },
  ];
}
