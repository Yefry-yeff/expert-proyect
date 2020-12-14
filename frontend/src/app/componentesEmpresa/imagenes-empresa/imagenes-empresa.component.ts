import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-imagenes-empresa',
  templateUrl: './imagenes-empresa.component.html',
  styleUrls: ['./imagenes-empresa.component.css']
})
export class ImagenesEmpresaComponent implements OnInit {

  constructor(private imagenService: ImageService) { }
  urlImg: String;
  idEmpresa: String;

  ngOnInit(): void {
  }

  obtenerImagenes() {

  }

  subirImagen(e) {
    let imagen = e.target.files[0];
    console.log(imagen);
    const formData = new FormData();
    formData.append('upload_preset', 'bancoImg');
    formData.append('file', imagen);

    this.imagenService.subirImagen(formData).subscribe((data: any) => {
      this.urlImg = data.url;
      console.log(data);
      this.agregarImagenNode();

    });
  }

  agregarImagenNode() {
    let img = {
      nombre: 'fondo',
      tipo: 'png',
      url: this.urlImg
    }
    this.imagenService.subirImagenNode(img, '5fd4ff3edc63884c9849ae81').subscribe((data: any) => {
      console.log(data);
      this.obtenerImagenes();
    });
  }
}

