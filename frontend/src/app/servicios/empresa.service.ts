import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private httpClient: HttpClient) { }

  obtenerEmpresa() {
    return this.httpClient.get('http://localhost:8888/empresa');
  }
}
