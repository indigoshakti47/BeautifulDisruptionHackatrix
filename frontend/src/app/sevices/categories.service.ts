import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  get(){
    return [
      {
        category: 'Agro',
        product: 'Coffe',
        description: 'An association of coffe producers in Risaralda',
        img: {
          'background': 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRLnnxCiKxHi419IVM0YSxpMafkKZLgWgDMjzhbsEe3qsIzMI8g)'
        },
      },
      {
        category: 'Textiles',
        product: 'Coffe',
        description: 'An association of coffe producers in Risaralda',
        img: {
          'background': 'url(http://olsimex.com.mx/images/servicio-transporte/importacion-de-textiles.jpg)'
        },
      },
      {
        category: 'Metalurgica',
        product: 'Coffe',
        description: 'An association of coffe producers in Risaralda',
        img: {
          'background': 'url(http://elagonista.com/uploads/noticias/5/2019/08/20190828141003_industria-metalurgica-730x405.jpg)'
        },
      },
    ]
  }
}
