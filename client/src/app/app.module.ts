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
import { CardProductComponent } from './commponents/card-product/card-product.component';
import { ProductComponent } from './commponents/product/product.component'
import { MatCardModule } from "@angular/material/card";
import { MatSliderModule } from '@angular/material/slider';
import {ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './commponents/admin/admin.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


const appRoutes: Routes = [
];
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { SignupComponent } from './commponents/signup/signup.component';
import {FormsModule} from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';
import { ConetctnavbarComponent } from './commponents/conectnavbar/conetctnavbar.component';
import { SigninComponent } from './commponents/signin/signin.component';
import { SearchComponent } from './search/search.component';
import { LogoutnavbarComponent } from './commponents/logoutnavbar/logoutnavbar.component';
import { NavbarhomeconectComponent } from './commponents/navbarhomeconect/navbarhomeconect.component';
import { NavbaruserconectComponent } from './commponents/navbaruserconect/navbaruserconect.component';
import { NavbarinfoComponent } from './commponents/navbarinfo/navbarinfo.component';
import { UsersinfoComponent } from './commponents/usersinfo/usersinfo.component';
import { UpdateComponent } from './commponents/update/update.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProfileComponent } from './profile/profile.component';





@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    NavbarComponent,
    ConetctnavbarComponent,
    CardProductComponent,
    ProductComponent,
    AdminComponent,
    SignupComponent,
    ConetctnavbarComponent,
    SearchComponent, 
    SigninComponent,
     LogoutnavbarComponent,
     NavbarhomeconectComponent,
     NavbaruserconectComponent,
     NavbarinfoComponent,
     UsersinfoComponent,
     UpdateComponent,
     FilterPipe,
     ProfileComponent,
  

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
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    MDBBootstrapModule.forRoot(),
    IvyCarouselModule,
    FormsModule,
    
    HttpClientModule,

    Ng2SearchPipeModule


  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule {

}
