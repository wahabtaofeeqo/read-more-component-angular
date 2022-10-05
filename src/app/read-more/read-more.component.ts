import { Component, Input } from '@angular/core';

@Component({
  selector: 'read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent {

  @Input()
  text: string = '';

  @Input()
  length: number = 250;

  isCollapsed: boolean = false;

  constructor() { }

}
