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


}
