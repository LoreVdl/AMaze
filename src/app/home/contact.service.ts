import {Injectable} from '@angular/core';
import emailjs, {EmailJSResponseStatus} from 'emailjs-com';
import {ViewState} from './viewState.enum';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor() { }

  viewState: ViewState = ViewState.Default;

  postMessage(input: Event): void {
    this.viewState = ViewState.Loading;
    input.preventDefault();
    emailjs.sendForm('smtp_server', 'template_z7yVCQbO', input.target as HTMLFormElement, 'user_kK9wrQ1KXTyc7mlfbQVXi')
      .then((result: EmailJSResponseStatus) => {
        this.viewState = ViewState.Success;

        setTimeout(() => {
          this.viewState = ViewState.Default;
        }, 5000);
      }, (error) => {
        this.viewState = ViewState.Error;

        setTimeout(() => {
          this.viewState = ViewState.Default;
        }, 5000);
      });
  }

  postEmail(input: Event): void {
    input.preventDefault();
    this.viewState = ViewState.Loading;
    emailjs.sendForm('smtp_server', 'template_i9emuzv', input.target as HTMLFormElement, 'user_kK9wrQ1KXTyc7mlfbQVXi')
      .then((result: EmailJSResponseStatus) => {
        this.viewState = ViewState.Success;
      }, (error) => {
        this.viewState = ViewState.Error;

        setTimeout(() => {
          this.viewState = ViewState.Default;
        }, 3000);
      });
  }
}
