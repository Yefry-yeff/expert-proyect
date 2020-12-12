import { Component, OnInit } from '@angular/core';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  plan: any;
  planes: any = {
    planes: '',
    descripcion: '',
    precio: ''
  };
  constructor(private planService: PlanesService) {

    this.obtenerPlanes();
   }

  ngOnInit(): void {
  }


  obtenerPlanes() {
    this.planService.obtenerPlan().subscribe((data: any) => {
      this.plan = data;
      console.log(data);
    });
  }

}
