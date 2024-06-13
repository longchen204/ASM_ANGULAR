import { Component } from '@angular/core';
import { ProductsService } from '../../products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tproduct } from '../../../interface/product';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrl: './admin-edit-product.component.css',
})
export class AdminEditProductComponent {
  constructor(
    private route: ActivatedRoute,
    private ProductsService: ProductsService
  ) {}
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
  });
  ProductId = this.route.snapshot.params['id'];

  async ngOnInit() {
    this.ProductsService.Get_Product_By_Id(this.ProductId).subscribe((data) => {
      console.log(data);
      this.productForm.controls.name.setValue(data.name);
      this.productForm.controls.category.setValue(data.category);
      this.productForm.controls.image.setValue(data.image);
      this.productForm.controls.price.setValue(data.price);
    });
    this.ProductsService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  router = new Router();
  onEditSubmit = async () => {
    this.ProductsService.Edit_Product(
      this.ProductId,
      this.productForm.value as any
    ).subscribe((data) => {
      alert('Cập nhật thành công');
      this.router.navigate(['admin']);
    });
  };

  // lấy dữ liệu từ category
  categories: any[] = [];
}
