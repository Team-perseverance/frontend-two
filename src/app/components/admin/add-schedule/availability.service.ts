import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, scheduled } from 'rxjs';
import { Doctor } from '../add-doctor/doctor';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  constructor(private http : HttpClient) { }

  baseapiurl: string = 'http://20.120.40.217'

  AddSchedule(sch : Schedule) : Observable<Schedule> {
    return this.http.post<Schedule>(this.baseapiurl + '/api/PhysicianAvailability/AddSchedule', sch);
  }

  UpdateDaySchedule(day: number, sch : Schedule[]) {
    return this.http.put<Schedule[]>(this.baseapiurl + `/api/PhysicianAvailability/UpdateAllSchedules?day=${day}`, sch);
  }

  GetDaySchedule(day: string) {
    return this.http.get<Schedule[]>(this.baseapiurl + `/api/PhysicianAvailability/GetSchedule?day=${day}`);
  }
}
export interface Schedule {
  doctorId : string | undefined,
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday : number;
}