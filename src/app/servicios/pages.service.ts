import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private httpClient:HttpClient) { }
  obtenerPage() {
    return this.httpClient.get('http://localhost:8888/pages');
  }

}
