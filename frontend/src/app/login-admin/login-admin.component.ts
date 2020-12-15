import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService} from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  admin: any = {
    emailAdmin: '',
    password: ''
  }

  error: boolean;

  constructor(private usuarioServicio:UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.error = false;
  }


  login(){
    console.log(this.admin);
    this.usuarioServicio.login(this.admin).subscribe((data: any) => {
      //console.log(data);

      if (data == null) {
        //console.log('No existe');
        this.error = true;
      } else {
        //console.log('Existe');
        window.localStorage.setItem('admin', JSON.stringify(data._id));
        this.router.navigate(['/dashboardAdmin']);
      }
    });
  }


}
