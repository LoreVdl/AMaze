import {Component, OnInit} from '@angular/core';
import {Time} from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-boomgaard',
  templateUrl: './boomgaard.component.html',
  styleUrls: ['./boomgaard.component.scss']
})
export class BoomgaardComponent implements OnInit {

  showPopUpMessage = false;
  clickedItem: string;
  clockForm: FormGroup;
  hours: FormControl = new FormControl('');
  minutes: FormControl = new FormControl('');

  ngOnInit(): void {
    this.clockForm = new FormGroup({
      hours: this.hours,
      minutes: this.minutes
    });
  }

  togglePopUpMessage(item: string): void {
    this.showPopUpMessage = !this.showPopUpMessage;
    this.clickedItem =  item;
  }

  submit(): void {
    switch (this.clickedItem) {
      case 'clock':
        this.togglePopUpMessage('');
        this.initLocalClocks({hours: this.hours.value, minutes: this.minutes.value});
        break;
    }
  }

  initLocalClocks(time: Time): void {
    const date = new Date(2020, 21, 10, time.hours, time.minutes);
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const hands = [
      {
        hand: 'hours',
        angle: (hours * 30) + (minutes / 2)
      },
      {
        hand: 'minutes',
        angle: (minutes * 6)
      }
    ];
    for (let j = 0; j < hands.length; j++) {
      const elements = document.querySelectorAll<HTMLElement>('.' + hands[j].hand);
      const setAttribute = 'setAttribute';

      for (let k = 0; k < elements.length; k++) {
        elements[k].style.transition = 'transform 1.5s linear';
        elements[k].style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)';
        elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';

        if (hands[j].hand === 'minutes') {
          elements[k].parentNode[setAttribute]('data-second-angle', hands[j + 1].angle);
        }
      }
    }
  }

}
