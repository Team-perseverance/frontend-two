import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test, conclusion } from './update-health.component';

@Injectable({
  providedIn: 'root'
})
export class UpdateHealthService {

  constructor(private http : HttpClient) { }

  baseapiurl: string = 'http://20.120.40.217'
  updateMedication(aid : string, med : Medication) {
    return this.http.put(this.baseapiurl+`/api/Medication/updatemedication/${aid}`, med);
  }

  updateTest(aid : string, med : Test) {
    return this.http.put(this.baseapiurl+`/api/PTest/modifyTest/${aid}`, med);
  }

  updateConclu(aid : string, med : conclusion) {
    return this.http.put(this.baseapiurl+`/api/PHRecord/updateHr/${aid}`, med);
  }
}

export interface Medication{
  health_Id : string,
  appointment_Id : string,
  drugs : string | null,
  quantity : string | null
}