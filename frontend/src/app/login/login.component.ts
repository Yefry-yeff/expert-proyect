import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService} from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: any = {
    emailUsuario: '',
    password: ''
  }

  error: boolean;
  constructor(private usuarioServicio:UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.error = false;
  }


  loginU(){
    console.log(this.usuario);
    this.usuarioServicio.loginUser(this.usuario).subscribe((data: any) => {
      //console.log(data);

      if (data == null) {
        //console.log('No existe');
        this.error = true;
      } else {
        //console.log('Existe');
        window.localStorage.setItem('usuarios', JSON.stringify(data._id));
        this.router.navigate(['/dashboardCliente']);
      }
    });
  }
}
