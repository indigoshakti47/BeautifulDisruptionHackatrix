import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  get(){
    return [{
      category: 'Agro',
      product: 'Coffe',
      description: 'An association of coffe producers in Risaralda',
      img: 'the url'
      },
      {
      category: 'Agro',
      product: 'Coffe',
      description: 'An association of coffe producers in Risaralda',
      img: 'the url'
      },
      {
      category: 'Agro',
      product: 'Coffe',
      description: 'An association of coffe producers in Risaralda',
      img: 'the url'
      }      

}
