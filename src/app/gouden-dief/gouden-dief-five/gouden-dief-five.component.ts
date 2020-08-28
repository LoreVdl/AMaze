import {Component, OnInit, Renderer2} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GoudenDiefService} from '../gouden-dief.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gouden-dief-five',
  templateUrl: './gouden-dief-five.component.html',
  styleUrls: ['./gouden-dief-five.component.scss']
})
export class GoudenDiefFiveComponent implements OnInit {

  loginForm: FormGroup;
  code: FormControl = new FormControl('');
  showErrorScreen = false;

  size = 0;

  clickedBoxes = [];

  readonly boxes = [
    {
      name: 'A',
      clicked: false,
      styling: '12 / span 1'
    },
    {
      name: 'B',
      clicked: false,
      styling: '13 / span 1'
    },
    {
      name: 'C',
      clicked: false,
      styling: '14 / span 1'
    },
    {
      name: 'D',
      clicked: false,
      styling: '15 / span 1'
    },
    {
      name: 'E',
      clicked: false,
      styling: '16 / span 1'
    },
    {
      name: 'F',
      clicked: false,
      styling: '17 / span 1'
    },
    {
      name: 'G',
      clicked: false,
      styling: '18 / span 1'
    },
    {
      name: 'H',
      clicked: false,
      styling: '18/ span 1'
    },
    {
      name: 'I',
      clicked: false,
      styling: '14 / span 1'
    },
    {
      name: 'J',
      clicked: false,
      styling: '15 / span 1'
    },
    {
      name: 'K',
      clicked: false,
      styling: '16 / span 1'
    },
    {
      name: 'L',
      clicked: false,
      styling: '17 / span 1'
    },
    {
      name: 'M',
      clicked: false,
      styling: '18 / span 1'
    },
    {
      name: 'N',
      clicked: false,
      styling: '14 / span 1'
    },
    {
      name: 'O',
      clicked: false,
      styling: '14 / span 1'
    },
    {
      name: 'P',
      clicked: false,
      styling: '14 / span 1'
    },
    {
      name: 'R',
      clicked: false,
      styling: '15 / span 1'
    },
    {
      name: 'S',
      clicked: false,
      styling: '16 / span 1'
    },
    {
      name: 'T',
      clicked: false,
      styling: '17 / span 1'
    },
    {
      name: 'U',
      clicked: false,
      styling: '18 / span 1'
    },
    {
      name: 'V',
      clicked: false,
      styling: '19 / span 1'
    },
    {
      name: 'W',
      clicked: false,
      styling: '20 / span 1'
    },
    {
      name: 'X',
      clicked: false,
      styling: '21 / span 1'
    },
    {
      name: 'Y',
      clicked: false,
      styling: '22 / span 1'
    },
    {
      name: 'Z',
      clicked: false,
      styling: '23 / span 1'
    }
  ];

  constructor(private goudenDiefService: GoudenDiefService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      code: this.code
    });
  }

  getSize(): number {
    const element = document.getElementsByClassName('snake-box')[0];
    return element.clientWidth;
  }

  toggleBox(value): void {
    value.clicked = !value.clicked;

    if (this.clickedBoxes.includes(value.name)) {
      const index = this.clickedBoxes.indexOf(value.name);
      console.log(index);
      this.clickedBoxes.splice(index, 1);
    } else {
      this.clickedBoxes.push(value.name);
    }

    this.goudenDiefService.setInputCode('codePageFive', this.clickedBoxes.sort().join(''));

    if (this.clickedBoxes.sort().join(',') === this.goudenDiefService.codePageFive.sort().join(',')) {
      setTimeout(() => {
        this.router.navigate(['degoudendief/pageSix']);
      }, 800);
    }
  }

  getColor(value): string {
    if (value.clicked) {
      return '#a83103';
    } else {
      return '#fff';
    }
  }

  getBorder(value): string {
    if (value.clicked) {
      return '0.1px solid #a83103';
    } else {
      return '0.1px solid lightgray';
    }
  }
}
