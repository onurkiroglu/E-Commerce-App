import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
  { path: 'nav', component: NavComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/category/:categoryId', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
