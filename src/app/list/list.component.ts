import { Component } from '@angular/core';

@Component({
  // This (and the other files in the list directory) was created by running 'ng generate component list' in the project directory
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor() {} // inside the parentheses: private xService: XService <-- imported from service file
  // abstract this into a service and get rid of the 'clicked' portion of it once backend is set up
  items = [
    { id: 0, note: 'item 0', clicked: false },
    { id: 1, note: 'item 1', clicked: false },
    { id: 2, note: 'item 2', clicked: false },
    { id: 3, note: 'item 3', clicked: false },
    { id: 4, note: 'item 4', clicked: false },
    { id: 5, note: 'item 5', clicked: false },
  ];
}
