import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../product.interface';
import { ICategory } from '../category.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API_URL = 'http://demo-api-angular.test/api/products';
  private API_URL_CATEGORY = 'http://demo-api-angular.test/api/products/create';
  private API_URL_DETAIL = 'http://demo-api-angular.test/api/products/edit';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL);
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL_DETAIL}/${id}`);
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.API_URL_CATEGORY);
  }

  add(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.API_URL_CATEGORY, product);
  }

  destroy(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
