import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  producId: string;
  categoryId: 0;

  constructor(private db: AngularFirestore) { }

  createProduct(data: any) {
    return this.db.collection(`catalogue`).add({
      title: data.title,
      description: data.description,
      qty: data.qty,
      price: data.price,
      imgURL: data.imgURL,
      category: data.category
    });
  }

  getProducts() {
    return this.db.collection('catalogue').snapshotChanges();
  }

  getSingleProduct(data: string) {
    return this.db.collection(`catalogue`).doc(data).snapshotChanges();
  }

  deleteProduct(id: string) {
    return this.db.collection('catalogue').doc(id).delete();
  }

  updateProduct(data: {}, id: string) {
    return this.db.collection('catalogue').doc(id).update(data);
  }
}

