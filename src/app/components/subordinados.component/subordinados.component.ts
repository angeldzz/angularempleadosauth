import { Component } from '@angular/core';
import { ServiceEmpleados } from '../../services/ServiciosEmpleados';
import { Router } from '@angular/router';
import { Perfil } from '../../models/Empleado';

@Component({
  selector: 'app-subordinados.component',
  standalone: false,
  templateUrl: './subordinados.component.html',
  styleUrl: './subordinados.component.css',
})
export class SubordinadosComponent {
  public subordinados!: Array<Perfil>
constructor(private _service: ServiceEmpleados, private _router: Router) {
  }
  ngOnInit(): void {
      const token = localStorage.getItem("token");
      if(token !== null && token !== ""){
        this._service.Subordinados(token).subscribe({
          next: (response) => {
            this.subordinados = response;
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
