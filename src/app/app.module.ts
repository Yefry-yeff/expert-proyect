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
import { PlntillaPrimeraComponent } from './plntilla-primera/plntilla-primera.component';
import { PlntillaSegundaComponent } from './plntilla-segunda/plntilla-segunda.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardEmpresaComponent } from './paginas/dashboard-empresa/dashboard-empresa.component';
import { SidebarEmpresaComponent } from './componentesEmpresa/sidebar-empresa/sidebar-empresa.component';
import { NavbarEmpresaComponent } from './componentesEmpresa/navbar-empresa/navbar-empresa.component';
import { NavbarAdminComponent } from './componentesAdmin/navbar-admin/navbar-admin.component';
import { UsuariosComponent } from './componentesAdmin/usuarios/usuarios.component';
import { PlantillasComponent } from './componentesAdmin/plantillas/plantillas.component';
import { RolesUsuariosComponent } from './componentesAdmin/roles-usuarios/roles-usuarios.component';
import { ImagenesEmpresaComponent } from './componentesEmpresa/imagenes-empresa/imagenes-empresa.component';
import { PagesEmpresaComponent } from './componentesEmpresa/pages-empresa/pages-empresa.component';
import { ProductoEmpresaComponent } from './componentesEmpresa/producto-empresa/producto-empresa.component';
import { DashboardClienteComponent } from './paginas/dashboard-cliente/dashboard-cliente.component';
import { CanastaComponent } from './componentesCliente/canasta/canasta.component';
import { SidebarClienteComponent } from './componentesCliente/sidebar-cliente/sidebar-cliente.component';
import { NavbarClienteComponent } from './componentesCliente/navbar-cliente/navbar-cliente.component';
import { DashboardAdministradorComponent } from './paginas/dashboard-administrador/dashboard-administrador.component';
import { SidebarAdminComponent } from './componentesAdmin/sidebar-admin/sidebar-admin.component';

const routes: Routes = [
  { path: 'registro-usuario', component: RegistroUsuarioComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component: LoginComponent },
  { path: 'plntilla-primera', component: PlntillaPrimeraComponent},
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
    RegistroUsuarioComponent,
    PlntillaPrimeraComponent,
    PlntillaSegundaComponent,
    DashboardEmpresaComponent,
    SidebarEmpresaComponent,
    NavbarEmpresaComponent,
    NavbarAdminComponent,
    UsuariosComponent,
    PlantillasComponent,
    RolesUsuariosComponent,
    ImagenesEmpresaComponent,
    PagesEmpresaComponent,
    ProductoEmpresaComponent,
    DashboardClienteComponent,
    CanastaComponent,
    SidebarClienteComponent,
    NavbarClienteComponent,
    DashboardAdministradorComponent,
    SidebarAdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
