import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HeaderComponent } from './shared/header/header.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from './store/store.module';
import { FooterComponent } from './shared/footer/footer.component';



// 2. Add your credentials from step 1
const config = {
  apiKey: 'AIzaSyC1ENAfOYRj1m6ynunVyvwcgLs9ssHH-Wc',
  authDomain: 'web-store-91e99.firebaseapp.com',
  databaseURL: 'https://web-store-91e99.firebaseio.com',
  projectId: 'web-store-91e99',
  storageBucket: 'web-store-91e99.appspot.com',
  messagingSenderId: '544089280125',
  appId: '1:544089280125:web:a65bc471d34777a036eb14',
  measurementId: 'G-726LF0KCK5'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    ContactsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    // 3. Initialize
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    StoreModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
