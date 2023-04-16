import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Doctor } from './admin/add-doctor/doctor';
import { Nurse } from './admin/add-nurse/nurse';
import { Observable, catchError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http : HttpClient){}
  isLoggedIn = false
  login(email : string){
    if(email === 'admin.com' || 'doctor.com' || 'nurse.com'){
      this.isLoggedIn = true
      //u can add specific routes here
    }
    return this.isLoggedIn
  }

  BASE_API_URL = "https://20.120.40.217"
  GET_PAT_BY_EMAIL_API_URL = "/api/PatientInfo/GetPatientInfobyemail"

  getPatientByEmail(email : string | null) {
    return this.http.get<PatientInfo[]>(this.BASE_API_URL + this.GET_PAT_BY_EMAIL_API_URL + `/${email}`, {observe: 'response'})
  }
  getDoctorByEmail(email:string){
    return this.http.get<Doctor>(this.BASE_API_URL +`/api/Doctor/GetByEmail?e=${email}`)
  }

  getNurseByEmail(email:string){
    return this.http.get<Nurse>(this.BASE_API_URL +`/api/Nurse/getByEmail?e=${email}`)
  }

  updatePatient(PID:Guid, data:updatePatient){
    return this.http.put(this.BASE_API_URL +`/api/PatientInfo/UpdatePatientinfo?Pat_id=${PID}`, data)
    .pipe(catchError(error=>of('err', error)))
  }

  updatePassword(data:upw){
    return this.http.put(this.BASE_API_URL +'/api/PatientLogin/Update', data).pipe(
      catchError(error=>of('err', error))
    )
  }
}

export interface upw{
  loginId: string,
  email: string,
  password: string
}

export interface updatePatient{
    adressLine: string,
    fullname: string,
    age: number,
    gender: string,
    email: string, 
    pasword: string,
    phone: number,
    state: string,
    city: string
}

export interface PatientInfo{
    patId : Guid,
    fullname : string,
    age : number,
    gender : string,
    email : string,
    pasword : string,
    phone : number,
    adressLine : string,
    city : string,
    state : string,
    created : string
}
