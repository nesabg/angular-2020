import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.getUser().subscribe(res => {
      this.user = res.payload.data();
    });
  }

}
