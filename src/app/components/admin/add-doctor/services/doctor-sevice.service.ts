import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../doctor';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorSeviceService {

  constructor(private http : HttpClient) { }
  baseapiurl: string = 'https://20.120.40.217'
  addDoctor(doctor : Doctor){
    return this.http.post<any>(this.baseapiurl+"/api/Doctor/addDoctor", doctor)
    .pipe(catchError(err => of('error',err)))
  }
}
