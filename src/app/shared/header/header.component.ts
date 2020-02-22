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
    private aRoute: ActivatedRoute,
    private crud: CrudService
    ) {}

  ngOnInit() {
      console.log(this.router.url);
  }

}
