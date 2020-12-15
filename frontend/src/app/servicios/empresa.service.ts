import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private httpClient: HttpClient) { }

  obtenerEmpresa(idEmpresa) {
    return this.httpClient.get('https://blooming-inlet-24549.herokuapp.com/empresa', idEmpresa);
  }
  guardarEmpresa(id:any) {
    return this.httpClient.post('https://blooming-inlet-24549.herokuapp.com/empresa', id​​​​​);
  }
  eliminarEmpresa(id:any){
    return this.httpClient.delete('https://blooming-inlet-24549.herokuapp.com/empresa' + '/' + id​​​​​);
  }
  login(empresa){
    return this.httpClient.post('https://blooming-inlet-24549.herokuapp.com/empresa/login', empresa);
  }
}
