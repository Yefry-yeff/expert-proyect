import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-imagenes-empresa',
  templateUrl: './imagenes-empresa.component.html',
  styleUrls: ['./imagenes-empresa.component.css']
})
export class ImagenesEmpresaComponent implements OnInit {

  constructor(private imagenService: ImageService, private servicioEmpresa:EmpresaService) { }
  urlImg: String;
  idEmpresa:any;
  imgSub: any;

  ngOnInit(): void {
    this.idEmpresa = '5fd4ff3edc63884c9849ae81';

    this.obtenerImagenes();

  }

  obtenerImagenes() {
    this.servicioEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((data: any) => {
      this.imgSub = data[1].bancoImagenes
      console.log('Imagnes ',data[1].bancoImagenes);
    });

  }

  subirImagen(e) {
    let imagen = e.target.files[0];
    console.log(imagen);
    const formData = new FormData();
    formData.append('upload_preset', 'imagenes');
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
    this.imagenService.subirImagenNode(img, this.idEmpresa).subscribe((data: any) => {
      console.log(data);
      this.obtenerImagenes();
    });
  }
}

