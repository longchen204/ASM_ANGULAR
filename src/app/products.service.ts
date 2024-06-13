import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Tproduct } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  API_URL: string = 'http://localhost:3000/products';
  Get_All_Products = (): Observable<any> => {
    return this.http.get(this.API_URL);
  };
  Add_Product = (product: any): Observable<any> => {
    return this.http.post(this.API_URL, product);
  };

  Delete_Product = (id: string): Observable<any> => {
    return this.http.delete(`${this.API_URL}/${id}`);
  };

  Edit_Product = (id: string, data: Tproduct): Observable<any> => {
    return this.http.put(this.API_URL + '/' + id, data);
  };

  Get_Product_By_Id = (id: string): Observable<any> => {
    return this.http.get(this.API_URL + '/' + id);
  };

  Get_Products_By_Keyword = (keyword: string): Observable<any> => {
    return this.http.get(this.API_URL + '?name_like=' + keyword);
  };

  GetProductByCategory(keyword: string): Observable<any[]> {
    return this.http.get<any[]>(
      this.API_URL + `?category=${encodeURIComponent(keyword)}`
    );
  }

  getAllCategories = (): Observable<any> => {
    return this.http.get('http://localhost:3000/category');
  };
  add_category = (category: any): Observable<any> => {
    return this.http.post('http://localhost:3000/category', category);
  };
  deleteCategory = (id: string): Observable<any> => {
    return this.http.delete(`http://localhost:3000/category/${id}`);
  };
}
