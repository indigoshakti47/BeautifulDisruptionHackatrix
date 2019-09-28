import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  get(){
    return [{
      img: 'https://placeralplato.com/files/2019/04/granos-de-cafe1.jpg',
      name: 'cafe 1',
      sale: [{
        cant: 10,
        prices: 100
      }],
    },{
      img: 'https://placeralplato.com/files/2019/04/granos-de-cafe1.jpg',
      name: 'cafe 2',
      sale: [{
        cant: 10,
        prices: 200
      }],
    },{
      img: 'https://placeralplato.com/files/2019/04/granos-de-cafe1.jpg',
      name: 'cafe 3',
      sale: [{
        cant: 10,
        prices: 300
      }],
    },]
  }
}
