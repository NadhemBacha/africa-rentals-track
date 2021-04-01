import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationComponent } from './commponents/information/information.component';
//dali
import { NavbarComponent } from './commponents/navbar/navbar.component';
import {MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProductComponent } from './commponents/product/product.component'
import { MatCardModule } from "@angular/material/card";
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    
    NavbarComponent,
    
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
