import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { CarshopComponent } from './carshop/carshop.component';

const routes: Routes = [
  {path: '', component: CategoriesComponent },
  {path: 'products', component: ProductsComponent },
  {path: 'shop', component: CarshopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
