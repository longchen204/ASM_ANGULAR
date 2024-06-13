import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products.service';
import { Tproduct } from '../../../interface/product';
import { Tcate } from '../../../interface/cate';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css',
})
export class ProductCategoryComponent {
  selectedCategories: string[] = [];
  products: Tproduct[] = [];
  categories: Tcate[] = [];
  filteredProducts: Tproduct[] = [];

  constructor(
    private productService: ProductsService,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  getProducts(): void {
    this.productService.Get_All_Products().subscribe((products) => {
      this.products = products;
      this.filterProducts();
    });
  }

  getCategories(): void {
    this.categoryService.Get_All_Category().subscribe((categories) => {
      this.categories = categories;
    });
  }

  toggleCategory(category: string): void {
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories = this.selectedCategories.filter(
        (c) => c !== category
      );
    } else {
      this.selectedCategories.push(category);
    }
    this.filterProducts();
  }

  filterProducts(): void {
    if (this.selectedCategories.length === 0) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((data: any) =>
        this.selectedCategories.includes(data.category)
      );
    }
  }
}
