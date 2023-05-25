import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//import { ProductListComponent } from './product-list/product-list.component';
//import { TopBarComponent } from './top-bar/top-bar.component';
//import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatIconModule } from '@angular/material/icon';
//import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    //ProductListComponent,
    //TopBarComponent,
    //ProductAlertsComponent,
    LoginComponent,
    SignupComponent,
    //SignupComponent
], imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
    //MatFormFieldModule,
    //MatIconModule,
    //MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }