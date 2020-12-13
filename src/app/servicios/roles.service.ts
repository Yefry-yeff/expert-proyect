import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private httpClient: HttpClient) { }
  obtenerRol() {
    return this.httpClient.get('http://localhost:8888/roles');
  }
  guardarRol(roles) {
    return this.httpClient.post('http://localhost:8888/roles',roles);
  }

  eliminarRol(id:any){
    return this.httpClient.delete('http://localhost:8888/roles' + '/' + id​​​​​);
  }
}
