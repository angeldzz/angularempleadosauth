import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ServiceEmpleados{
    constructor(private _http: HttpClient) {
    }
    
}