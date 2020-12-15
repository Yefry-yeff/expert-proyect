import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor(private httpClient: HttpClient) { }
  obtenerPlan() {
    return this.httpClient.get('https://blooming-inlet-24549.herokuapp.com/planes');
  }

  guardarPlan(id:any) {
    return this.httpClient.post('https://blooming-inlet-24549.herokuapp.com/planes', id​​​​​);
  }
  eliminarPlan(id:any){
    return this.httpClient.delete('https://blooming-inlet-24549.herokuapp.com/planes' + '/' + id​​​​​);
  }
}
