import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-small-navigatie',
  templateUrl: './small-navigatie.component.html',
  styleUrls: ['./small-navigatie.component.scss']
})
export class SmallNavigatieComponent implements OnInit {
  @Output() scrollEvent: EventEmitter<string> = new EventEmitter();
  @Input() activeElement: string;

  constructor() { }

  ngOnInit() {
  }

  getIconUrl(id: string): string {
    if (this.activeElement === id) {
      return '../../../assets/images/' + id + '-green.svg';
    } else {
      return '../../../assets/images/' + id + '.svg';
    }
  }

}
