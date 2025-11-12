import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/ServiciosEmpleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login.component',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{
  public user!: string;
  public password!: string;
  constructor(
    private _service: ServiceEmpleados,
    private _router: Router,
  ) {}
  ngOnInit(): void {
    
  }
  LoginToken(): void{
    this._service.AuthToken(this.user, this.password).subscribe(response => {
        localStorage.setItem("token",response.response)
        this._router.navigate(["/"])
    })
  }
}
