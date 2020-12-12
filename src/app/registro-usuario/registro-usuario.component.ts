import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import {​​​​​ FormControl , FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  Formulario= new FormGroup({​​​​​
    nombreUsuario: new FormControl('',[Validators.required]),
    apellidoUsuario:new FormControl('',[Validators.required]),
    nickNameUsuario:new FormControl('',[Validators.required]),
    edadUsuario: new FormControl('', [Validators.required]),
    direccionUsiario: new FormControl('', [Validators.required]),
    emailUsuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  }​​​​​)

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
  }

  enviar() {
    console.log(this.Formulario.value);
    this.usuarioService.registarusuarios(this.Formulario.value).subscribe(
      res=>{​​​​​
        console.log(res);
      }​​​​​,error=>{​​​​​
        console.log(error);
      }​​​​​
    );
  }


}
