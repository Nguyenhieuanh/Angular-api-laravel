import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API_URL = 'http://demo-api-angular.test/api/products';
  private readonly API_URL_CATEGORY = 'http://demo-api-angular.test/api/products/create';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL);
  }

  showProductAddForm(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.API_URL_CATEGORY);
  }

  add(product: IProduct) {
    return this.http.post(this.API_URL, product);
  }
}
