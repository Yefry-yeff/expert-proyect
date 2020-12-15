import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-nav-landing',
  templateUrl: './nav-landing.component.html',
  styleUrls: ['./nav-landing.component.css']
})
export class NavLandingComponent implements OnInit {

  constructor(private navegacion: Router) { }

  ngOnInit(): void {
  }
  irRutas() {
    this.navegacion.navigate(['registro-usuario']);
  }

  irRutas1() {
    this.navegacion.navigate(['login']);
  }

  irRutas2() {
    this.navegacion.navigate(['loginAdmin']);
  }
  irRutas3() {
    this.navegacion.navigate(['loginEmpresa']);
  }
}
