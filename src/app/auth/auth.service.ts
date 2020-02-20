import { Injectable, NgZone } from '@angular/core';
import { IUser } from '../interfaces/user.model';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    userData: any;

    constructor(
      private afs: AngularFirestore,
      private afAuth: AngularFireAuth,
      private router: Router,
      private ngZone: NgZone,
      private db: AngularFirestore
    ) {
      this.afAuth.authState.subscribe( user => {
        if (user) {
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user'));
        } else {
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
      });
    }
    register(data: any) {
         return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
          .then(res => {
            this.SetUserData(res.user, data);
            this.router.navigate(['']);
          }).catch( err => {
            window.alert(err.message);
          });
    }

    login(email: string, password: string) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then( res => {
          this.ngZone.run(() => {
            this.router.navigate(['']);
          });
          this.SetUserData(res.user);
        }).catch(err => {
          window.alert(err.message);
        });
    }

    signOut() {
      this.afAuth.auth.signOut()
        .then(() => {
          localStorage.removeItem('user');
          this.router.navigate(['login']);
        });
    }

    SetUserData(user: IUser, formData?: any) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
      const userData: IUser = {
        uid: user.uid,
        email: user.email,
        imageURL: formData.imageURL,
        publicName: formData.publicName,
        address: formData.address,
        phone: formData.phone
      };

      return userRef.set(userData, { merge: true});

    }

    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return user !== null;
    }

    getUser() {
      const localUser = JSON.parse(localStorage.getItem('user'));
      return this.db.collection(`users`).doc(localUser.uid).snapshotChanges();
    }
}
