import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatSliderModule} from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, UserDetailComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
