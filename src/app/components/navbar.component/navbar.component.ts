import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/ServiciosEmpleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit{
  public apellido!: string;
  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ) {
    
  }
  ngOnInit(): void {
    const token = localStorage.getItem("token")
    if(token !== null && token !== ""){
      this._service.PerfilUsuario(token).subscribe(response =>{
        this.apellido = response.apellido;
      })
    }
  }
  logout():void {
    localStorage.removeItem("token")
    this._router.navigate(["/"]).then(() => {
          window.location.reload();
        })
  }
}
