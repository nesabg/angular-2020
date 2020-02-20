import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  products: any;

  constructor(
    private crud: CrudService,
    private router: Router,
    private actRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.crud.getProducts().subscribe( (res) => {
      res.length > 0 ? this.products = res : this.products = undefined;
    });
  }
  singleProductHandler(id: string) {
    this.router.navigate(['catalogue/', id]);
  }

}
