import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../add-doctor/doctor';

@Injectable({
  providedIn: 'root'
})
export class GetAllDoctorsService {

  constructor(private http : HttpClient) { }
  baseapiurl: string = 'http://20.120.40.217'
  getAll(){
    return this.http.get<Doctor[]>(this.baseapiurl+"/api/Doctor/getAllDoctor");
  }
}
