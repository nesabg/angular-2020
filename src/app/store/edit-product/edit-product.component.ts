import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productData: any;

  constructor(
    private crud: CrudService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.crud.getSingleProduct(this.activatedRoute.snapshot.params.id)
      .subscribe(res => {
        console.log(res.payload.data());
        this.productData = res.payload.data();
      });
  }

}
