import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/ServiciosEmpleados';
import { Router } from '@angular/router';
import { Perfil } from '../../models/Empleado';

@Component({
  selector: 'app-perfil.component',
  standalone: false,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent implements OnInit{
  public perfil!: Perfil;
  constructor(private _service: ServiceEmpleados, private _router: Router) {
  }
  ngOnInit(): void {
      const token = localStorage.getItem("token");
      if(token !== null && token !== ""){
        this._service.PerfilUsuario(token).subscribe({
          next: (response) => {
            this.perfil = response;
          },
          error: (error) => {
            console.error(error);
            this._router.navigate(["/login"]);
          }
        });
      } else {
        this._router.navigate(["/login"])
      }
  }
}
