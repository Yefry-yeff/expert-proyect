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
    return this.httpClient.get('http://localhost:8888/usuario'​​​​​);
  }​​​​​


}
