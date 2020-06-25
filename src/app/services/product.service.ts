import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API_URL = 'http://demo-api-angular.test/api/products';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL);
  }
}
