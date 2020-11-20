import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GoudenDiefService} from '../gouden-dief.service';

@Component({
  selector: 'app-gouden-dief-nineteen',
  templateUrl: './gouden-dief-nineteen.component.html',
  styleUrls: ['./gouden-dief-nineteen.component.scss']
})
export class GoudenDiefNineteenComponent implements OnInit{

  constructor(private router: Router,
              private goudenDiefService: GoudenDiefService) {
  }

  clickedBoxes = [];
  showErrorScreen = false;

  projects = [
    {
      styling: '10 / span 3',
      name: 'seven_mistakes',
      imageUrl: '../../assets/gouden-dief-icons/seven_mistakes_button.svg',
      clicked: false,
      value: '1'
    },
    {
      styling: '13 / span 3',
      name: 'lost_painting',
      imageUrl: '../../assets/gouden-dief-icons/lost_painting_button.svg',
      clicked: false,
      value: '2'
    },
    {
      styling: '16 / span 3',
      name: 'water_falls',
      imageUrl: '../../assets/gouden-dief-icons/water_falls_button.svg',
      clicked: false,
      value: '3'
    },
    {
      styling: '19 / span 3',
      name: 'alphabet_snake',
      imageUrl: '../../assets/gouden-dief-icons/alphabet_snake_button.svg',
      clicked: false,
      value: '4'
    },
    {
      styling: '10 / span 3',
      name: 'counting_mazes',
      imageUrl: '../../assets/gouden-dief-icons/counting_mazes_button.svg',
      clicked: false,
      value: '5'
    },
    {
      styling: '13 / span 3',
      name: 'stary_skys',
      imageUrl: '../../assets/gouden-dief-icons/stary_skys_button.svg',
      clicked: false,
      value: '6'
    },
    {
      styling: '16 / span 3',
      name: 'birds_in_flags',
      imageUrl: '../../assets/gouden-dief-icons/birds_in_flags_button.svg',
      clicked: false,
      value: '7'
    },
    {
      styling: '19 / span 3',
      name: 'the_right_balance',
      imageUrl: '../../assets/gouden-dief-icons/the_right_balance_button.svg',
      clicked: false,
      value: '8'
    }
  ];

  ngOnInit(): void {
    this.goudenDiefService.loadSuccessAudio();
    this.goudenDiefService.loadButtonAudio();
    this.goudenDiefService.loadEndAudio();
  }

  getImage(value): string {
    if (value.clicked) {
      return '../../assets/gouden-dief-icons/' + value.name + '_A.svg';
    } else {
      return value.imageUrl;
    }
  }

  clickButton(value): void {
    if (!value.clicked) {
      this.goudenDiefService.loadButtonAudio();
      this.goudenDiefService.playButtonAudio();
      this.clickedBoxes.push(value.value);

      value.clicked = true;

      if (this.projects.every(currentValue => currentValue.clicked)) {
        this.goudenDiefService.setInputCode('codePageNineteen', this.clickedBoxes.join(''));

        if (this.clickedBoxes.join('') === this.goudenDiefService.codePageNineteen.join('')) {
          this.goudenDiefService.playEndAudio();
          setTimeout(() => {
            this.router.navigate(['degoudendief/pageTwenty']);
          }, 800);
        } else {
          this.showErrorScreen = true;
          this.goudenDiefService.playSuccessAudio();
          this.clickedBoxes = [];

          setTimeout(() => {
            this.showErrorScreen = false;
            for (const project of this.projects) {
              project.clicked = false;
            }
          }, 1500);
        }
      }
    }
  }
}
