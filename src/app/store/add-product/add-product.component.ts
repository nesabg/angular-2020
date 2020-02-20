import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private crud: CrudService, private router: Router) { }

  ngOnInit() {
  }

  createProduct(data: {}) {
    this.crud.createProduct(data)
    .then(() => {this.router.navigate(['catalogue']);
  });
  }

}
