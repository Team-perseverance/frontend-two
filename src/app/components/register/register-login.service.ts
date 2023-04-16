import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterLoginService {
  constructor(private http: HttpClient) {}
  baseUrl = "https://20.120.40.217"
  Rurl = "/api/PatientInfo/AddnewPatientinfo"
  Lurl = "/api/PatientLogin/Get"
  AddLogin = "/api/PatientLogin/Add"

  getUser(email : string, password : string){
    let params = new HttpParams()
    params = params.append('email', email)
    params = params.append('password', password)
    return this.http.get(this.baseUrl+ this.Lurl, {params : params})
      .pipe(catchError(err => of('error',err)))
  } 
  
  addNewUser(user : User) {
    return this.http.post<User>(this.baseUrl + this.Rurl, user)
      .pipe(catchError(err => of('error',err)))
  }
  addNewLogin(user : UserLogin){
    return this.http.post<any>(this.baseUrl + this.AddLogin, user)
      .pipe(catchError(err => of('error',err)))
  }
}

export interface UserLogin{
  loginId ?: string
  email: string
  password: string
}
export interface User {
  fullname: string;
  age: string;
  gender: string;
  email: string;
  pasword: string;
  phone: number;
  adressLine: string;
  city: string;
  state: string;
  created: string;
}
