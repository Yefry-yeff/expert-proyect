import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private httpClient:HttpClient) { }
  obtenerPage() {
    return this.httpClient.get('https://blooming-inlet-24549.herokuapp.com/pages');
  }

  guardarPlantilla(id:any) {
    return this.httpClient.post('https://blooming-inlet-24549.herokuapp.com/pages', id​​​​​);
  }
  eliminarPlantilla(id:any){
    return this.httpClient.delete('https://blooming-inlet-24549.herokuapp.com/pages' + '/' + id​​​​​);
  }
}
