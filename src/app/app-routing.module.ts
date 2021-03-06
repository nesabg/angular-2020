import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CatalogueComponent } from './store/catalogue/catalogue.component';
import { AddProductComponent } from './store/add-product/add-product.component';
import { ProductComponent } from './store/product/product.component';
import { UserDetailComponent } from './auth/user-detail/user-detail.component';
import { EditProductComponent } from './store/edit-product/edit-product.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';

const appRouts: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-detail', component: UserDetailComponent },
  { path: 'catalogue' , component: CatalogueComponent},
  { path: 'catalogue/:id' , component: ProductComponent},
  { path: 'catalogue/:id/edit' , component: EditProductComponent},
  { path: 'add-product' , component: AddProductComponent},
  { path: '**' , component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

// resolve: { productData: SingleProductResolver}
