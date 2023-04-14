import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompleteInfoService {

  constructor(private http : HttpClient) { }
  BASE_API_URL = "https://20.120.40.217"
  API_URL : string = "/api/History/GetCompleteHistory/"
  API_URL_DOC : string = "/api/Doctor/byId"
  // ?id=
  getCompleteInfo(pid:string | undefined){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(this.BASE_API_URL+this.API_URL+pid, {headers, observe:'response'})
  }
  getDoctorName(did:string|undefined){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(this.BASE_API_URL+this.API_URL_DOC+`?id=${did}`, {headers, observe:'response'})
  }
}
