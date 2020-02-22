import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth/auth.service';
import { CrudService } from './store/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from './interfaces/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

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


