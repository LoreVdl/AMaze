import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Charge} from '../models/charge.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url = 'http://localhost:8080/charge';

  constructor(private http: HttpClient) { }

  charge(id: string, price: number): Observable<object> {
    const body = {
      amount: price,
      stripeToken: id
    };

    return this.http.post(this.url, body);
  }
}
