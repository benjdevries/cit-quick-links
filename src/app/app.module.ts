import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from './credentials';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkCardComponent } from './link-card/link-card.component';
import { HomeComponent } from './home/home.component';
import { StockItemComponent } from './stock-item/stock-item.component';
import { StockWindowComponent } from './stock-window/stock-window.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkCardComponent,
    HomeComponent,
    StockItemComponent,
    StockWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
