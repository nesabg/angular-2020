import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Resolve } from '@angular/router';
import { CrudService } from '../crud.service';

@Injectable({
  providedIn: 'root'
})
export class SingleProductResolver implements Resolve<any> {

  constructor(private crud: CrudService) { }

  resolve() {
  }

}

