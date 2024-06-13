import { Component, Input } from '@angular/core';
import { Tproduct } from '../../../interface/product';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  products: Tproduct[] = [
    {
      name: 'Cameras 1',
      image:
        'https://vn.canon/media/image/2022/11/01/c8c8ab88ead148e9b64490fdd764bcf4_EOS+R6+Mark+II+RF24-105mm+f4-7.1+IS+STM+front+slant.png',
      price: 100,
      star: 4,
    },
    {
      name: 'Wireless headphones',
      image: '../../../assets/Image/headphone-instance@3x.png',
      price: 400,
      star: 3,
    },
    {
      name: 'Play game',
      image: '../../../assets/Image/taychoito.png',
      price: 200,
      star: 3,
    },
    {
      name: 'Tablet as a laptop',
      image:
        'https://png.pngtree.com/thumb_back/fw800/background/20230912/pngtree-laptop-computer-tablet-and-leaves-in-the-autumn-image_13225211.png',
      price: 500,
      star: 3,
    },
  ];
  gioihan(index: number, product: Tproduct): string {
    // giải thích :
    return product.name;
  }

  constructor(
    private route: ActivatedRoute,
    private ProductsService: ProductsService
  ) {}

  ProductId = this.route.snapshot.params['id'];
  product: any;

  cartForm = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
  });

  ngOnInit() {
    this.ProductsService.Get_Product_By_Id(this.ProductId).subscribe((data) => {
      console.log(data);
      this.product = data;
    });
  }
}
