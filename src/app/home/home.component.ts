import { Component, OnInit } from '@angular/core';
import { CrudService } from '../store/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any;
  promoProducts: any;

  constructor(
    private crud: CrudService,
    private router: Router,
    private actRoute: ActivatedRoute
    ) { }

    ngOnInit() {
      this.crud.getProducts().subscribe( (res) => {
        res.length > 0 ? this.products = res : this.products = undefined;
        this.promoProducts = this.products.filter( e => e.payload.doc.data().category.startsWith('Front'));
      });
    }
    singleProductHandler(id: string) {
      this.router.navigate(['catalogue/', id]);
    }
}
