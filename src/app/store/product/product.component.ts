import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { CrudService } from '../crud.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  singleProduct: any;

  constructor(
    private crud: CrudService,
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.crud.getSingleProduct(this.activatedRoute.snapshot.params.id)
      .subscribe(res => {
        this.singleProduct = res.payload.data();
      });
  }

  deleteHandler() {
    if (confirm('Are you sure want to delete this product?')) {
      this.router.navigate(['catalogue']);
      return this.crud.deleteProduct(this.activatedRoute.snapshot.params.id);
    }
  }
}
