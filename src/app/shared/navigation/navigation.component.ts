import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavigationItem} from './navigation-item.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output() scrollEvent: EventEmitter<string> = new EventEmitter();
  @Input() items: Array<NavigationItem>;

  constructor() { }

  ngOnInit() {
  }

}
