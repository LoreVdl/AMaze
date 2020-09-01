import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gouden-dief-nineteen',
  templateUrl: './gouden-dief-nineteen.component.html',
  styleUrls: ['./gouden-dief-nineteen.component.scss']
})
export class GoudenDiefNineteenComponent implements OnInit {

  projects = [
    {
      styling: '10 / span 3',
      name: 'Seven Mistakes',
      imageUrl: '../../assets/gouden-dief-icons/seven_mistakes_button.svg',
      clicked: false
    },
    {
      styling: '13 / span 3',
      name: 'Lost Painting',
      imageUrl: '../../assets/gouden-dief-icons/lost_painting_button.svg',
      clicked: false
    },
    {
      styling: '16 / span 3',
      name: 'Water Falls',
      imageUrl: '../../assets/gouden-dief-icons/water_falls_button.svg',
      clicked: false
    },
    {
      styling: '19 / span 3',
      name: 'Alphabet Snake',
      imageUrl: '../../assets/gouden-dief-icons/alphabet_snake_button.svg',
      clicked: false
    },
    {
      styling: '10 / span 3',
      name: 'Counting Mazes',
      imageUrl: '../../assets/gouden-dief-icons/counting_mazes_button.svg',
      clicked: false
    },
    {
      styling: '13 / span 3',
      name: 'Stary Skys',
      imageUrl: '../../assets/gouden-dief-icons/stary_skys_button.svg',
      clicked: false
    },
    {
      styling: '16 / span 3',
      name: 'Birds in Flags',
      imageUrl: '../../assets/gouden-dief-icons/birds_in_flags_button.svg',
      clicked: false
    },
    {
      styling: '19 / span 3',
      name: 'The right Balance',
      imageUrl: '../../assets/gouden-dief-icons/the_right_balance_button.svg',
      clicked: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
