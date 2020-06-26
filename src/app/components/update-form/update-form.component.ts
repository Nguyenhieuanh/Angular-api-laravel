import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/product.interface';
import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/category.interface';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  categoriesList: ICategory[];
  product: IProduct;
  updateForm: FormGroup;
  constructor(private productService: ProductService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.productService.getProductById

    this.updateForm = this.formBuilder.group({
      name: [],
      description: [],
      price: [],
      category_id: [],
    });
  }

  onSubmit() {
    //
  }

}
