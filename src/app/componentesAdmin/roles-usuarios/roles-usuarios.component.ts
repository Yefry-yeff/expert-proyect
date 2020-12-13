import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/servicios/roles.service';

@Component({
  selector: 'app-roles-usuarios',
  templateUrl: './roles-usuarios.component.html',
  styleUrls: ['./roles-usuarios.component.css']
})
export class RolesUsuariosComponent implements OnInit {


  rol: any;
  roles: any = {
    rol: '',
    descripcion: ''
  };
  constructor(private rolesService: RolesService) { 
}

  ngOnInit(): void {
    this.obtenerRoles();
}


obtenerRoles() {
 this.rolesService.obtenerRol().subscribe((data: any) => {
   this.rol = data;
   console.log(data);
 });
}
  eliminarRol(id) {
    this.rolesService.eliminarRol(id).subscribe((data: any) => {
      this.rol = data;
      console.log(data);
      this.obtenerRoles();
    });
  }
  agregarRol() {
    this.rolesService.guardarRol(this.roles).subscribe((data: any) => {
      this.rol = data;
      console.log(data);
      this.obtenerRoles();
    });
  }

}
