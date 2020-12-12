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
}
