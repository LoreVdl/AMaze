import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from './models/product.model';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Observable<any[]>;

  constructor(database: AngularFirestore) {
    this.products = database.collection('products').valueChanges();
  }

  ngOnInit() {
  }

}
