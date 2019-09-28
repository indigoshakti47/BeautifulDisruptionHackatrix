import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../sevices/categories.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories = this.categoriesService.get()
  img = {
    'background': 'url(http://elagonista.com/uploads/noticias/5/2019/08/20190828141003_industria-metalurgica-730x405.jpg)'
  }

  constructor(
  private categoriesService:CategoriesService
) {}

  ngOnInit() {
  console.log(this.categories)
  }

}
