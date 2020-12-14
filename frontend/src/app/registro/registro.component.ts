import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup, Validators}  from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  FormularioE= new FormGroup({
    NombreE:new FormControl('',[Validators.required]),
    UbicacionE:new FormControl('',[Validators.required]),
    SloganE:new FormControl('',[Validators.required]),
    DescripcionE:new FormControl('',[Validators.required]),
    contrasenia:new FormControl('',[Validators.required, Validators.minLength(6)])
  })
  constructor() { }

  ngOnInit(): void {
  }

}
