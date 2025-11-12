import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Perfil } from "../models/perfil";

@Injectable()
export class ServiceEmpleados{
    constructor(private _http: HttpClient) {
    }
    AuthToken(user: string, pass: string):Observable<any> {
        let url = environment.urlEmple + "Auth/Login"
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        return this._http.post(url, JSON.stringify({"userName":user,"Password":pass}), {headers})
    }
    PerfilUsuario(token: string): Observable<Perfil>{
        console.log(token);
        let url = environment.urlEmple + "api/Empleados/PerfilEmpleado"
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        return this._http.get<Perfil>(url, {headers})
    }
}