import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  get(){
    return [{
      img: 'https://placeralplato.com/files/2019/04/granos-de-cafe1.jpg',
      name: 'café',
      unit:[{
        cant: '1klg',
        price: '$6000'
      }],
      sale: [{
        cant: '500 kls',
        prices: '$3000000'
      }],
    },{
      img: 'https://placeralplato.com/files/2019/04/granos-de-cafe1.jpg',
      name: 'azúcar',
      unit:[{
        cant: '1 klg',
        price: '???'
      }],
      sale: [{
        cant: '10 kls',
        prices: '$30000'
      }],
    },{
      img: 'https://placeralplato.com/files/2019/04/granos-de-cafe1.jpg',
      name: 'vasos',
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
