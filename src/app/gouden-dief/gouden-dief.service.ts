import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoudenDiefService {

  constructor() { }

  readonly code = '1234';
  input: string;

  set inputCode(input: string) {
   this.input = input;
  }

  get inputCode(): string {
    return this.input;
  }
}
