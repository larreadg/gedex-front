import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Response } from '../helpers/response.model';
import { CurrentUser } from '../models/usuario.model';
import * as CryptoJS from 'crypto-js';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private userSource = new BehaviorSubject<CurrentUser>(new CurrentUser());
  public user = this.userSource.asObservable();

  constructor(private http:HttpClient, private local: LocalStorageService, private router: Router) { }

  login = (form:any):Observable<Response> => {
    return this.http.post<Response>(`${environment.apiUrl}/api/user/login`, form);
  }

  setSession = (user: CurrentUser, token: string) => {
    this.removeSession();
    this.userSource.next(user);
    let encryptedUser = this.encryptUser(user);
    if(encryptedUser != null){
      this.local.set('user', encryptedUser, 1, 'd');
    }
    let encryptedToken = this.encryptToken(token);
    if(encryptedToken != null){
      this.local.set('token', encryptedToken, 1, 'd');
    }
  }

  private encryptUser = (user:CurrentUser) => {
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(user), environment.apiKey).toString();
    } catch (e) {
      return null;
    }
  }

  private decryptUser = (encrypted:string) => {
    try {
      const bytes = CryptoJS.AES.decrypt(encrypted, environment.apiKey);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  private encryptToken = (token: string) => {
    try {
      return CryptoJS.AES.encrypt(token, environment.apiKey).toString();
    } catch (e) {
      return null;
    }
  }

  private decryptToken = (encrypted:string) => {
    try {
      const bytes = CryptoJS.AES.decrypt(encrypted, environment.apiKey);
      if (bytes.toString()) {
        return bytes.toString(CryptoJS.enc.Utf8);
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  removeSession = () => {
    this.local.clear();
  }

  getToken = () => {
    let token = this.local.get('token');
    if(token) return this.decryptToken(token);
    return null;
  }
  
  getUser = () => {
    let user = this.local.get('user');
    if(user) return this.decryptUser(user);
    return null;
  }
}
