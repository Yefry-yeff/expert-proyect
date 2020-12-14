import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/servicios/pages.service';

@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {
  page: any;
  pages: any = {

    plantilla: '',
    colorPrincipal: '',
    colorSecunario:'',
    navbarColor: ''

  };
  constructor(private pagesService: PagesService) {
    
 
    this.obtenerPages();
  }
  
  ngOnInit(): void {
  }
  
  obtenerPages() {
   this.pagesService.obtenerPage().subscribe((data: any) => {
     this.page = data;
     console.log(data);
   });
  }

  agregarPage() {
    this.pagesService.guardarPlantilla(this.pages).subscribe((data: any) => {
      this.page = data;
      console.log(data);
      this.obtenerPages();
    });
  }
  eliminarPage(id) {
    this.pagesService.eliminarPlantilla(id).subscribe((data: any) => {
      this.page = data;
      console.log(data);
      this.obtenerPages();

    });
  }
}
