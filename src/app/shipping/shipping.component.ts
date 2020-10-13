import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

import { CartService } from '../cart.service';



@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  @Output() selectedShipping = new EventEmitter<any>();
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  shippingSelected(price){
    console.log(price);
    this.selectedShipping.emit(price);
  }

}