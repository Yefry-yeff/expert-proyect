import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavUsuarioComponent } from './nav-usuario/nav-usuario.component';
import { FooterUsuarioComponent } from './footer-usuario/footer-usuario.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavLandingComponent } from './nav-landing/nav-landing.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

const routes: Routes = [
  { path: 'registro-usuario', component: RegistroUsuarioComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', component: LandingComponent }  
];
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavUsuarioComponent,
    FooterUsuarioComponent,
    RegistroComponent,
    LoginComponent,
    NavLandingComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
