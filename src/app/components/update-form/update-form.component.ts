import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/product.interface';
import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/category.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  categoriesList: ICategory[];
  product: IProduct;
  updateForm: FormGroup;
  constructor(private productService: ProductService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      name: [],
      description: [],
      price: [],
      category_id: [],
    });

    this.productService.getCategories().subscribe(res => {
      this.categoriesList = res;
    });

    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.productService.getProductById(id).subscribe(res => {
      this.product = res;
      this.updateForm.patchValue(this.product);
    }, error => {
      console.log(error);
    });
  }

  onSubmit() {
    //
  }

}
