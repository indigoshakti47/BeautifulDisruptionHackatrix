import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../sevices/products.service'

@Component({
  selector: 'app-carshop',
  templateUrl: './carshop.component.html',
  styleUrls: ['./carshop.component.scss']
})
export class CarshopComponent implements OnInit {

  constructor(
    private productService:ProductsService
  ) { }

  ngOnInit() {
  }

}
