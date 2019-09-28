import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../sevices/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = this.productService.get()

  constructor(
    private productService:ProductsService
  ) { }

  ngOnInit() {
    console.log(this.products)
  }

}
