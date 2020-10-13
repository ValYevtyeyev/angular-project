import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  items;
  checkoutForm;
  totalCost = 0;
  shippingCost = 0;
  constructor(private route: ActivatedRoute,
  private cartService: CartService,
  private formBuilder: FormBuilder,) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

  ngOnInit() {
    this.items = this.cartService.getItems();
    
    for(let i = 0; i < this.items.length; i++){
      this.totalCost = this.totalCost + this.items[i].price;
    }
    this.totalCost = this.totalCost + this.shippingCost;
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

  onShippingSelect(shippingPrice){
    this.shippingCost = shippingPrice;
  }

}