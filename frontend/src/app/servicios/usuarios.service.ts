import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }

  registarusuario(algo) {
    return algo;
  }
  obtenerUsuario(){​​​​​
    return this.httpClient.get('https://blooming-inlet-24549.herokuapp.com/usuario'​​​​​);
  }​​​​​

  guardarCliente(id:any) {
    return this.httpClient.post('https://blooming-inlet-24549.herokuapp.com/usuario', id​​​​​);
  }
  eliminarCliente(id:any){
    return this.httpClient.delete('https://blooming-inlet-24549.herokuapp.com/usuario' + '/' + id​​​​​);
  }

  login(admin){
    return this.httpClient.post('https://blooming-inlet-24549.herokuapp.com/admin/login', admin);
  }
  loginUser(user){
    return this.httpClient.post('https://blooming-inlet-24549.herokuapp.com/usuario/login', user);
  }
}
