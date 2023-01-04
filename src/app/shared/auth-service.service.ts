import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  isAuthenticated:boolean = false
  role!: string
  redirectToUrl!:string;
  private url = "api/users/"

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }

  changeAuthStatus(){
    this.isAuthenticated = !this.isAuthenticated
  }
  checkAuthStatus(){
    return this.isAuthenticated
  }

  changeRole(role: string){
    this.role = role
  }

  checkRole(){
    return this.role
  }
}
