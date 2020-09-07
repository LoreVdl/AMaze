import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../home/contact.service';

@Component({
  selector: 'app-gouden-dief-twenty-one',
  templateUrl: './gouden-dief-twenty-one.component.html',
  styleUrls: ['./gouden-dief-twenty-one.component.scss']
})
export class GoudenDiefTwentyOneComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])])
    });
  }

  submit(formData): void {
    this.contactService.postEmail(formData);
    this.loginForm.reset();
  }
}
