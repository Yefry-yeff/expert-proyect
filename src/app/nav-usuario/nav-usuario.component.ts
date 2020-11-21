import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-nav-usuario',
  templateUrl: './nav-usuario.component.html',
  styleUrls: ['./nav-usuario.component.css']
})
export class NavUsuarioComponent implements OnInit {

  constructor(private navegacion: Router) { }

  ngOnInit(): void {
  }
  irRutas1() {
    this.navegacion.navigate(['login']);
  }
}
