import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  get(){
    return [{
      name: 'cafe 1',
      sale: [{
        cant: 10,
        prices: 100
      }],
    },{
      name: 'cafe 2',
      sale: [{
        cant: 10,
        prices: 200
      }],
    },{
      name: 'cafe 3',
      sale: [{
        cant: 10,
        prices: 300
      }],
    },]
  }
}
