import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoEmpresaService {

  constructor(private httpClient:HttpClient) { }
  obtenerProductos() {
    return this.httpClient.get('https://blooming-inlet-24549.herokuapp.com/productos');
  }

  guardarProductos(id:any) {
    return this.httpClient.post('https://blooming-inlet-24549.herokuapp.com/productos', id​​​​​);
  }
  eliminarProductos(id:any){
    return this.httpClient.delete('https://blooming-inlet-24549.herokuapp.com/productos' + '/' + id​​​​​);
  }
}
