import { Component } from '@angular/core';
import { Tproduct } from '../../../interface/product';
import { Tcate } from '../../../interface/cate';
import { ProductsService } from '../../products.service';
import { CategoryService } from '../../category.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-cate',
  templateUrl: './test-cate.component.html',
  styleUrl: './test-cate.component.css',
})
export class TestCateComponent {}
