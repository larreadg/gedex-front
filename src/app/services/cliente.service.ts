import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  guardarCliente(form:any):Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/cliente`, form);
  }

}
