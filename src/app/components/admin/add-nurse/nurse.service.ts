import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  constructor(private http : HttpClient) { }
  baseapiurl: string = 'https://20.120.40.217'
  addNurse(nurse : NewNurse){
    return this.http.post(this.baseapiurl + "/api/Nurse/AddNurse", nurse)
    .pipe(catchError(err => of('error',err)))
  }
}

export interface NewNurse{
  name : string | undefined
  email : string  | undefined
  phoneNo : number | undefined 
}
