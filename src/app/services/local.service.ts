import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http:HttpClient) { }

  getSidebar():Observable<any> {
    return this.http.get('assets/json/sidebar.json');
  }
  getLocation(lat:string, lon:string):Observable<any> {
    return this.http.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
  }
}
