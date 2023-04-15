import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Doctor } from '../admin/add-doctor/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http : HttpClient) { }
  baseapiurl: string = 'http://20.120.40.217'
  getDoctorByEmail(email : string) : Observable<Doctor> {
    let params = new HttpParams()
    params = params.append('e', email)
    return this.http.get<Doctor>(this.baseapiurl+"/api/Doctor/GetByEmail", {params : params})
  }
}


