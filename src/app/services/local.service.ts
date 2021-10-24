import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http:HttpClient) { }

  getSidebar():Observable<any> {
    return this.http.get('../../assets/json/sidebar.json');
  }
}
