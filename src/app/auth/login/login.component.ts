import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  constructor(private auth: AuthService) {
    this.user = auth.userData;
    console.log(auth.isLoggedIn);
  }

  ngOnInit() {
  }
  login({email, password}) {
    return this.auth.login(email, password);
  }

}
