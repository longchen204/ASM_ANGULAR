import { ProductsService } from './../../products.service';
import { Component } from '@angular/core';
import { Tproduct } from '../../../interface/product';

@Component({
  selector: 'app-admin-list-product',
  templateUrl: './admin-list-product.component.html',
  styleUrl: './admin-list-product.component.css',
})
export class AdminListProductComponent {
  products: Tproduct[] = [];
  constructor(private ProductsService: ProductsService) {}
  ngOnInit(): void {
    this.ProductsService.Get_All_Products().subscribe((data) => {
      this.products = data;
    });
  }
  onDelete = (id: any) => {
    if (confirm('Bạn chắc chứ?')) {
      this.ProductsService.Delete_Product(id).subscribe((data) => {
        this.products = this.products.filter((product) => product.id !== id);
      });
    }
  };
}
