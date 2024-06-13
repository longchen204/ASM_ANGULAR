import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViwerComponent } from './layout/viwer/viwer.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductCateComponent } from './components/product-cate/product-cate.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { AdminListProductComponent } from './components/admin-list-product/admin-list-product.component';
import { AdminListCateComponent } from './components/admin-list-cate/admin-list-cate.component';
import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';
import { AdminAddCateComponent } from './components/admin-add-cate/admin-add-cate.component';
import { AdminEditProductComponent } from './components/admin-edit-product/admin-edit-product.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminEditCateComponent } from './components/admin-edit-cate/admin-edit-cate.component';
import { SearchComponent } from './components/search/search.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';

const routes: Routes = [
  {
    path: '',
    component: ViwerComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'catalog', component: ProductCateComponent },
      { path: 'page', component: ProductCartComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'product-detail/:id', component: ProductDetailComponent },
      { path: 'pro-cate', component: ProductCategoryComponent },
      { path: 'search', component: SearchComponent },
      { path: 'product/id', component: ProductDetailComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: AdminListProductComponent },
      { path: 'listCate', component: AdminListCateComponent },
      { path: 'addPro', component: AdminAddProductComponent },
      { path: 'addCate', component: AdminAddCateComponent },
      { path: 'products/edit/:id', component: AdminEditProductComponent },
      { path: 'categories/edit/:id', component: ProductCategoryComponent },
    ],
  },
  { path: '**', redirectTo: 'home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
