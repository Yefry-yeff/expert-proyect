import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../servicios/empresa.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.component.html',
  styleUrls: ['./login-empresa.component.css']
})
export class LoginEmpresaComponent implements OnInit {
  empresa: any = {
    nombreEmpresa: '',
    password: ''
  }

  error: boolean;
  constructor(private empresaServicio:EmpresaService, private router: Router) { }

  ngOnInit(): void {

    this.error = false;
  }


  login(){
    console.log(this.empresa);
    this.empresaServicio.login(this.empresa).subscribe((data: any) => {
      //console.log(data);

      if (data == null) {
        //console.log('No existe');
        this.error = true;
      } else {
        //console.log('Existe');
        window.localStorage.setItem('empresa', JSON.stringify(data._id));
        this.router.navigate(['/dashboardEmpresa']);
      }
    });
  }


}
