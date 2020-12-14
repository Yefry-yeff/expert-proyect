import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'https://api.cloudinary.com/v1_1/dl6znygp8/image/upload';

  subirImagen(imagen) {
    return this.httpClient.post('https://api.cloudinary.com/v1_1/dl6znygp8/image/upload', imagen);
  }

  subirImagenNode(imagen, idEmpresa) {
    return this. httpClient.post('http://localhost:8888/empresa/image/'+ idEmpresa, imagen);
  }


}
