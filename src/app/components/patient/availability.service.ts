import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, scheduled } from 'rxjs';
// import { Schedule } from '../../schedule';
import { Schedule } from '../admin/add-schedule/availability.service';
import { Doctor } from '../admin/add-doctor/doctor';
import { Patient } from '../admin/view-patients/get-patients.service';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  constructor(private http : HttpClient) { }

  BASE_API_URL = "http://20.120.40.217"
  ADD_SCH_API_URL = "/api/PhysicianAvailability/AddSchedule"
  UPDATE_SCH_API_URL = "/api/PhysicianAvailability/UpdateAllSchedules"
  GET_DAY_SCH_API_URL = "/api/PhysicianAvailability/GetSchedule"
  GET_ALL_DOC = "/api/Doctor/getAllDoctor"

  AddSchedule(sch : Schedule) : Observable<Schedule> {
    return this.http.post<Schedule>(this.BASE_API_URL + this.ADD_SCH_API_URL , sch);
  }

  UpdateDaySchedule(day: number, sch : Schedule[]) {
    return this.http.put<Schedule[]>(this.BASE_API_URL + this.UPDATE_SCH_API_URL + `?day=${day}`, sch);
  }

  GetDaySchedule(day: string | null) {
    return this.http.get<Schedule[]>(this.BASE_API_URL + this.GET_DAY_SCH_API_URL + `?day=${day}`);
  }

  getAllDoctors(){
    return this.http.get<Doctor[]>(this.BASE_API_URL + this.GET_ALL_DOC)
  }
}

export interface DoctorSchedule{
  Doctor : Doctor
  schedule : Schedule
}