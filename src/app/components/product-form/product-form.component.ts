import { IProduct } from 'src/app/product.interface';
import { ICategory } from './../../category.interface';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  createForm: FormGroup;
  categoriesList: ICategory[];
  msg: string;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getCategories().subscribe(res => {
      this.categoriesList = res;
    }, error => {
      console.log(error);
    });

    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [, Validators.required],
      category_id: [1, Validators.required]
    });
  }

  onSubmit() {
    const product: IProduct = this.createForm.value;
    console.log(product);
    return this.productService.add(product).subscribe(res => {
      this.msg = 'Add successfully';
      this.createForm.reset({
      category_id: 1
      });
    });
  }
}

