import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: IProduct[] = [];
  page = 1;
  pageSize = 10;
  // categories: ICategory[] = [];
  // data: Array<any>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(next => {
      this.productList = next;
      // this.categories = this.data[0];
      // this.productList = this.data[1];
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });

  }

}
