import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  get(){
    return [{
      img: {
        'background': 'url(https://placeralplato.com/files/2019/04/granos-de-cafe1.jpg)'
      },
      name: 'café',
      shoppers: 4,
      unit:[{
        cant: '1klg',
        price: '$6000'
      }],
      sale: [{
        cant: '500 kls',
        prices: '$3000000'
      }],
    },{
      img: {
        background: 'url(https://placeralplato.com/files/2019/04/granos-de-cafe1.jpg)'
      },
      name: 'azúcar',
      shoppers: 3,
      unit:[{
        cant: '1 klg',
        price: '???'
      }],
      sale: [{
        cant: '10 kls',
        prices: '$30000'
      }],
    },{
      img: {
        background: 'url(https://placeralplato.com/files/2019/04/granos-de-cafe1.jpg)'
      },
      name: 'vasos',
      shoppers: 5,
      unit:[{
        cant: '1 paquete',
        price: '???'
      }],
      sale: [{
        cant: '10000',
        prices: '$60000'
      }],
    },]
  }
}
