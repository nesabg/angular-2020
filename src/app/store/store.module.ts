import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';



@NgModule({
  declarations: [CatalogueComponent, ProductComponent, AddProductComponent, EditProductComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    CatalogueComponent, ProductComponent, AddProductComponent, EditProductComponent
  ]
})
export class StoreModule { }
