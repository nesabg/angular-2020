import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/store/crud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string;
  url: string;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private crud: CrudService
    ) {
      this.url = this.router.url.substr(1);
    }

  ngOnInit() {
    if (this.url.includes('/')) {
      this.crud.getSingleProduct(this.url.substr(9)).subscribe(res => {
      });
      } else {
      console.log('no');
    }
  }

}
