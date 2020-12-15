import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private httpClient: HttpClient) { }

  obtenerEmpresa(idEmpresa) {
    return this.httpClient.get('http://localhost:8888/empresa', idEmpresa);
  }
  guardarEmpresa(id:any) {
    return this.httpClient.post('http://localhost:8888/empresa', id​​​​​);
  }
  eliminarEmpresa(id:any){
    return this.httpClient.delete('http://localhost:8888/empresa' + '/' + id​​​​​);
  }
  login(empresa){
    return this.httpClient.post('http://localhost:8888/empresa/login', empresa);
  }
}
