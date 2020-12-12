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




const routes: Routes = [
  {
    path: 'dashboardAdmin', component: DashboardAdministradorComponent, children: [
      { path: 'plantillas', component: PlantillasComponent },
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
      { path: 'pagesEmpresa', component: PagesEmpresaComponent}
    ]
  },
  {
    path: 'dashboardCliente', component: DashboardClienteComponent, children: [
      { path: 'canastaCliente', component: CanastaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
