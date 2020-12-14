import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor(private httpClient: HttpClient) { }  
  obtenerPlan() {
    return this.httpClient.get('http://localhost:8888/planes');
  }

  guardarPlan(id:any) {
    return this.httpClient.post('http://localhost:8888/planes', id​​​​​);
  }
  eliminarPlan(id:any){
    return this.httpClient.delete('http://localhost:8888/planes' + '/' + id​​​​​);
  }
}
