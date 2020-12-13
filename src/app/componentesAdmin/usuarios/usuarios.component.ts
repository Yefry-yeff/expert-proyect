import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuario: any;
  usuarios: any = {
    nombreUsuario: '',
    apellidoUsuario: '',
    nickNameUsuario: '',
    edadUsuario: '',
    direccionUsiario: '',
    emailUsuario: '',
    rolUsuario: '',
    password: ''
  };
  constructor(private usuarioServicio: UsuariosService) {    
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuarioServicio.obtenerUsuario().subscribe((data: any) => {
      this.usuario = data;
      console.log(data);
    });
  }

  agregarUsuario() {
    this.usuarioServicio.guardarCliente(this.usuarios).subscribe((data: any) => {
      this.usuario = data;
      console.log(data);
      this.obtenerUsuarios();
    });
  }

  eliminarUsuario(id) {
    this.usuarioServicio.eliminarCliente(id).subscribe((data: any) => {
      this.usuario = data;
      console.log(data);
      this.obtenerUsuarios();

    });
  }


}