import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'https://api.cloudinary.com/v1_1/dv8oucks9/image/upload';

  subirImagen(imagen) {
    return this.httpClient.post('https://api.cloudinary.com/v1_1/dv8oucks9/image/upload', imagen);
  }

  subirImagenNode(imagen, idEmpresa) {
    return this. httpClient.post('https://blooming-inlet-24549.herokuapp.com/empresa/image/'+ idEmpresa, imagen);
  }


}
