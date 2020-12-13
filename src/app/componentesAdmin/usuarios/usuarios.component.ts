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
        direccionUsiario:'',
        emailUsuario: '',
        rolUsuario: '',
        password:'',
        carrito: []
  };
  constructor(private usuarioServicio: UsuariosService) {

  this.obtenerUsuarios();
}

ngOnInit(): void {
}


obtenerUsuarios() {
 this.usuarioServicio.obtenerUsuario().subscribe((data: any) => {
   this.usuario = data;
   console.log(data);
 });
  }
  
  prueba() {
    console.log('Prueba');
  }

}
