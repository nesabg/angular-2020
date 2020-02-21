import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productData: any;

  constructor(
    private crud: CrudService,
    private aRoute: ActivatedRoute,
    private router: Router
  ) {
    this.crud.getSingleProduct(this.aRoute.snapshot.params.id).subscribe(res => this.productData = res.payload.data());
  }
  ngOnInit() {}

  updateProductHandler(data: {}) {
    this.router.navigate(['catalogue']);
    console.log(this.aRoute.snapshot.params.id);
    this.crud.updateProduct(data, this.aRoute.snapshot.params.id);
  }
}
