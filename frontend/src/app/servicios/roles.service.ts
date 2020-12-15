import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private httpClient: HttpClient) { }
  obtenerRol() {
    return this.httpClient.get('https://blooming-inlet-24549.herokuapp.com/roles');
  }
  guardarRol(roles) {
    return this.httpClient.post('https://blooming-inlet-24549.herokuapp.com/roles',roles);
  }

  eliminarRol(id:any){
    return this.httpClient.delete('https://blooming-inlet-24549.herokuapp.com/roles' + '/' + id​​​​​);
  }
}
