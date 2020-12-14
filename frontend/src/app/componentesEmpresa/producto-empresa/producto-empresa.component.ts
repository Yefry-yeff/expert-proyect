import { Component, OnInit } from '@angular/core';
import { ProductoEmpresaService } from 'src/app/servicios/producto-empresa.service';

@Component({
  selector: 'app-producto-empresa',
  templateUrl: './producto-empresa.component.html',
  styleUrls: ['./producto-empresa.component.css']
})
export class ProductoEmpresaComponent implements OnInit {
  producto: any;
  productos: any = {
    productoCanasta: '',
    descripcion: '',
    precio: ''
  }
  constructor(private productoService: ProductoEmpresaService) { }

  ngOnInit(): void {
    this.obtenerProducto();
  }


  obtenerProducto() {
    this.productoService.obtenerProductos().subscribe((data: any) => {
      this.producto = data;
      console.log(data);
    });
  }
  agregarProducto() {
    this.productoService.guardarProductos(this.productos).subscribe((data: any) => {
      this.producto = data;
      console.log(data);
      this.obtenerProducto();
    });
  }

  eliminarProducto(id) {
    this.productoService.eliminarProductos(id).subscribe((data: any) => {
      this.producto = data;
      console.log(data);
      this.obtenerProducto();
    });
  }
}
