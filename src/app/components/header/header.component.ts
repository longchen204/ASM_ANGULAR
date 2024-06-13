import { Component } from '@angular/core';
import { IMenu } from '../../../interface/menu';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../products.service';
import { Tproduct } from '../../../interface/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menus: IMenu[] = [
    {
      id: 1,
      name: 'Home',
      path: 'home',
      parent: 0,
    },
    {
      id: 2,
      name: 'Catalog',
      path: 'catalog',
      parent: 0,
    },

    {
      id: 3,
      name: 'Blog',
      path: 'blog',
      parent: 0,
    },
    {
      id: 4,
      name: 'Page',
      path: 'page',
      parent: 0,
    },
    {
      id: 5,
      name: 'About Us',
      path: 'aboutus',
      parent: 0,
    },
  ];
  checkChildrent = (menuid: number): boolean => {
    let check: boolean = false;
    for (let item of this.menus) {
      if (item.parent === menuid) {
        check = true;
      }
    }
    return check;
  };

  //SEARCH

  searchForm = new FormGroup({
    keywords: new FormControl(''),
  });

  constructor(private route: Router) {}

  onSearch = () => {
    this.route.navigate(['/search'], {
      queryParams: { keywords: this.searchForm.value.keywords },
    });
  };
}
