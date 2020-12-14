import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/servicios/empresa.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  
  empresa: any;
  empresas: any = {

    nombreEmpresa: '',
    correoEmpresa: '',
    direccion: '',
    descripcion: '',
    productos: [],
    categoria: [],
    productosCategoria:[],
    paginas:[],
    plan: '',
    password: '',
    bancoImagenes: []
  };
  constructor(private empresaService: EmpresaService) {

    this.obtenerEmpresas();
  }

 ngOnInit(): void {
 }


 obtenerEmpresas() {
   this.empresaService.obtenerEmpresa().subscribe((data: any) => {
     this.empresa = data;
     console.log(data);
   });
  }
  agregarEmpresa() {
    this.empresaService.guardarEmpresa(this.empresas).subscribe((data: any) => {
      this.empresa = data;
      console.log(data);
      this.obtenerEmpresas();
    });
  }

  eliminarEmpresas(id) {
    this.empresaService.eliminarEmpresa(id).subscribe((data: any) => {
      this.empresa = data;
      console.log(data);
      this.obtenerEmpresas();
    });
  }

}
