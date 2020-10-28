import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {GoudenDiefService} from '../gouden-dief.service';
import {Router} from '@angular/router';

export interface BarMeterConfig {
  step: number;
  min: number;
  max: number;
  value: number;
}

@Component({
  selector: 'app-gouden-dief-seventeen',
  templateUrl: './gouden-dief-seventeen.component.html',
  styleUrls: ['./gouden-dief-seventeen.component.scss']
})
export class GoudenDiefSeventeenComponent implements OnInit {
  constructor(private goudenDiefService: GoudenDiefService,
              private router: Router) { }

   private barMeterData: BarMeterConfig = {
    step: 0,
    min: 0,
    max: 100,
    value: 0
  };

  private readonly answer1 = ['kameel', 'dromedaris', 'koop'];

  private readonly answer2 = ['pop', 'spiegel'];

  private readonly answer3 = ['jupiter', 'planeten', 'planeet'];

  private readonly answer4 = ['WO1', 'datum', '1914', '1912'];

  private readonly answer5 = ['regenboog', 'geel'];

  private readonly answer6 = ['olympisch', 'zwart'];

  private readonly answer7 = ['vorm', 'figuur', 'hoek', 'cirkel', 'plaats'];

  private answers = [this.answer1, this.answer2, this.answer3, this.answer4, this.answer5, this.answer6, this.answer7];

  set barMeterConfig(barMeterConfig: BarMeterConfig) {
    this.barMeterData = barMeterConfig;
    this.barMeterData.value = this.barMeterData.value > this.barMeterData.max
      ? this.barMeterData.max
      : this.barMeterData.value;
    if (this.barMeterData.max % this.barMeterData.step !== 0) {
      this.barMeterData.max = Math.ceil(this.barMeterData.max / this.barMeterData.step) * this.barMeterData.step;
    }
  }
  loginForm: FormGroup;
  code: FormControl = new FormControl('');
  showErrorScreen = false;
  barMeter: BarMeterConfig = {
    value: 0,
    max: 7,
    min: 0,
    step: 7
  };

  ngOnInit() {
    this.loginForm = new FormGroup({
      code: this.code
    });

    this.barMeterConfig = this.barMeter;
  }

  submit(): void {
    let index;

    switch (true) {
      case (this.matchWords(this.code.value, this.answer1)):
        index = this.answers.indexOf(this.answer1);
        if (index > -1) {
          this.barMeter.value++;
          this.answers.splice(index, 1);
        }
        break;
      case (this.matchWords(this.code.value, this.answer2)):
        index = this.answers.indexOf(this.answer2);
        if (index > -1) {
          this.barMeter.value++;
          this.answers.splice(index, 1);
        }
        break;
      case (this.matchWords(this.code.value, this.answer3)):
        index = this.answers.indexOf(this.answer3);
        if (index > -1) {
          this.barMeter.value++;
          this.answers.splice(index, 1);
        }
        break;
      case (this.matchWords(this.code.value, this.answer4)):
        index = this.answers.indexOf(this.answer4);
        if (index > -1) {
          this.barMeter.value++;
          this.answers.splice(index, 1);
        }
        break;
      case (this.matchWords(this.code.value, this.answer5)):
        index = this.answers.indexOf(this.answer5);
        if (index > -1) {
          this.barMeter.value++;
          this.answers.splice(index, 1);
        }
        break;
      case (this.matchWords(this.code.value, this.answer6)):
        index = this.answers.indexOf(this.answer6);
        if (index > -1) {
          this.barMeter.value++;
          this.answers.splice(index, 1);
        }
        break;
      case (this.matchWords(this.code.value, this.answer7)):
        index = this.answers.indexOf(this.answer7);
        if (index > -1) {
          this.barMeter.value++;
          this.answers.splice(index, 1);
        }
        break;
      default:
        this.showErrorScreen = true;
        this.goudenDiefService.playAudio();
        setTimeout(() => {
          this.showErrorScreen = false;
        }, 1500);
        break;
    }

    if (this.barMeter.value === 7) {
      this.goudenDiefService.setInputCode('codePageSeventeen', 'true');
      setTimeout(() => {
        this.router.navigate(['degoudendief/pageEighteen']);
      }, 800);
    }

    this.code.setValue('');
  }

  getMeterFilledStyle(): object {
    return {width: `${this.calculatePercentageFilled()}%`};
  }

  getMeterUnfilledStyle(): object {
    return {
      width: `${100 - this.calculatePercentageFilled()}%`,
      left: `${this.calculatePercentageFilled()}%`
    };
  }
  pressed(e) {
    let keynum;

    if (window.event) {
      keynum = e.keyCode;
    } else if (e.which) {
      keynum = e.which;
    }

    if (keynum === 13) {
      this.submit();
    }
  }

  private calculatePercentageFilled(): number {
    const result = ((this.barMeterData.value - this.barMeterData.min) / (this.barMeterData.max - this.barMeterData.min)) * 100;
    if (result > 100) {
      return 100;
    } else if (result < 0) {
      return 0;
    } else {
      return result;
    }
  }

  private matchWords(sentence, answers): boolean {
    let found = 0;
    for (const answer of answers) {
      if (sentence.toLowerCase().indexOf(answer.toLowerCase()) > -1) {
        found++;
      }
    }
    return found >= 2;
  }
}
