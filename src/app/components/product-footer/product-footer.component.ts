import { Component } from '@angular/core';
import { Tproduct } from '../../../interface/product';

@Component({
  selector: 'app-product-footer',
  templateUrl: './product-footer.component.html',
  styleUrl: './product-footer.component.css',
})
export class ProductFooterComponent {
  products: Tproduct[] = [];
}
