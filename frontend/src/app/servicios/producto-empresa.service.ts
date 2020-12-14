import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoEmpresaService {

  constructor(private httpClient:HttpClient) { }
  obtenerProductos() {
    return this.httpClient.get('http://localhost:8888/productos');
  }

  guardarProductos(id:any) {
    return this.httpClient.post('http://localhost:8888/productos', id​​​​​);
  }
  eliminarProductos(id:any){
    return this.httpClient.delete('http://localhost:8888/productos' + '/' + id​​​​​);
  }
}
