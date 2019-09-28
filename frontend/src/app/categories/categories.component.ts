import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../sevices/categories.service'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories = this.categoriesService.get()

  constructor(
  private categoriesService:CategoriesService
) {}

  ngOnInit() {
  console.log(this.categories)
  }

}
