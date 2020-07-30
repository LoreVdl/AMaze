import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects = [
    {
      name: 'Next Escape',
      imageUrl: '../../assets/images/nextEscapeButton.svg'
    },
    {
      name: 'De legende van Zandhoven',
      imageUrl: '../../assets/images/dlvzButton.svg'
    },
    {
      name: 'Farm fun',
      imageUrl: '../../assets/images/farmfunButton.svg'
    },
    {
      name: 'De gouden dief',
      imageUrl: '../../assets/images/goudenDiefButton.svg'
    },
    {
      name: 'More to come',
      imageUrl: '../../assets/images/moreToComeButton.svg'
    }
    ];

  formData: FormGroup;
  elementId = 'home';

  constructor(private formbuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formData = this.formbuilder.group({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      comment: new FormControl('', [Validators.required])
    });
  }

  scroll(id: string): void {
    this.elementId = id;
    const element = document.getElementById(id) as HTMLElement;
    element.scrollIntoView({behavior: 'smooth'});
  }

}
