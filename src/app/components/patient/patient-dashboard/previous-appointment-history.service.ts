import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreviousAppointmentHistoryService {
  BASE_API_URL = "https://20.120.40.217"
  GET_APP_API_URL = "/api/Appointment/GetAppointmentsByPatientId"
  // 
  constructor(private http:HttpClient) { }
  getAppointment(PID:string){
    return this.http.get(this.BASE_API_URL+this.GET_APP_API_URL+`?patient_id=${PID}`, {observe:'response'})
  }
}
