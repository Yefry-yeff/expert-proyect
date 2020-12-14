
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PageEmpresaService {

  constructor(private httpClient:HttpClient) { }
  obtenerPage() {
    return this.httpClient.get('http://localhost:8888/pages');
  }

  guardarPlantilla(id:any) {
    return this.httpClient.post('http://localhost:8888/pages', id​​​​​);
  }
  eliminarPlantilla(id:any){
    return this.httpClient.delete('http://localhost:8888/pages' + '/' + id​​​​​);
  }
}
