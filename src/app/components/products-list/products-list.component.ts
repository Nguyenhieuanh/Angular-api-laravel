import { ProductService } from './../../services/product.service';
import { IProduct } from './../../product.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productList: IProduct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(next => {
      this.productList = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

}
