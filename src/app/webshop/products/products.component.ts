import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {PaymentService} from '../services/payment.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnDestroy, AfterViewInit {

  @ViewChild('cardInfo', {static: false}) cardInfo: ElementRef;
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  constructor(private paymentService: PaymentService,
              private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.card = elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  charge(id: string): void {
    this.paymentService.charge(id, 20000).subscribe();
  }

  async onSubmit(form: NgForm) {
    const {token, error} = await stripe.createToken(this.card);
    if (error) {
      console.log('Something is wrong:', error);
    } else {
      this.charge(token.id);
      console.log('Success!', token);
    }
  }

}
