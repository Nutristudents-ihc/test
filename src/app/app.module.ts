import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ComunidadModule } from './comunidad/comunidad.module';
import { LoginModule } from './login/login.module';
import { SigninModule } from './signin/signin.module';
import { SeguimientoModule } from './seguimiento/seguimiento.module';
import { HomeModule } from './home/home.module';

import { DietasModule } from './dietas/dietas.module'



import { FormsComponent } from './login/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { BtnCrearComponent } from './comunidad/btn-crear/btn-crear.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ComunidadModule,
    LoginModule,
    SigninModule,
    SeguimientoModule,
    HomeModule,
    DietasModule,
    HttpClientModule,
    FormsComponent,
    ReactiveFormsModule,



  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
