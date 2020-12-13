import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardEmpresaComponent } from './paginas/dashboard-empresa/dashboard-empresa.component';
import { ImagenesEmpresaComponent } from './componentesEmpresa/imagenes-empresa/imagenes-empresa.component';
import { PagesEmpresaComponent } from './componentesEmpresa/pages-empresa/pages-empresa.component';
import { ProductoEmpresaComponent } from './componentesEmpresa/producto-empresa/producto-empresa.component';
import { DashboardClienteComponent } from './paginas/dashboard-cliente/dashboard-cliente.component';
import { CanastaComponent } from './componentesCliente/canasta/canasta.component';
import { RolesUsuariosComponent } from './componentesAdmin/roles-usuarios/roles-usuarios.component';
import { UsuariosComponent } from './componentesAdmin/usuarios/usuarios.component';
import { PlantillasComponent } from './componentesAdmin/plantillas/plantillas.component';
import { DashboardAdministradorComponent } from './paginas/dashboard-administrador/dashboard-administrador.component';
import { EmpresasComponent } from './componentesAdmin/empresas/empresas.component';
import { PlanesComponent } from './componentesAdmin/planes/planes.component';
import { PruebaComponent } from './prueba/prueba.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { LoginEmpresaComponent } from './login-empresa/login-empresa.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LandingComponent } from './landing/landing.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';




const routes: Routes = [

  { path: 'registro-usuario', component: RegistroUsuarioComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component: LoginComponent },
  { path: 'loginEmpresa', component: LoginEmpresaComponent },
  { path: 'loginAdmin', component: LoginAdminComponent },
  
  {
    path: 'dashboardAdmin', component: DashboardAdministradorComponent, children: [
      { path: 'plantillas', component: PlantillasComponent },
      { path: 'prueba', component: PruebaComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'roles', component: RolesUsuariosComponent },
      { path: 'empresas', component: EmpresasComponent },
      { path: 'planes', component: PlanesComponent }
    ]
  },

  {
    path: 'dashboardEmpresa', component: DashboardEmpresaComponent, children: [
      { path: 'imagenesEmpresa', component: ImagenesEmpresaComponent },
      { path: 'productosEmpresa', component: ProductoEmpresaComponent },
      { path: 'pagesEmpresa', component: PagesEmpresaComponent }
    ]
  },
  {
    path: 'dashboardCliente', component: DashboardClienteComponent, children: [
      { path: 'canastaCliente', component: CanastaComponent }
    ]
  },
  { path: '**', component: LandingComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
