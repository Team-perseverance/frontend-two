import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class AddScheduleService {
  selectedDate !: Date
  Docemail !: string | undefined

  constructor(private http: HttpClient) { }
  baseapiurl: string = 'https://20.120.40.217'
  AddSchedule(email : string) {
    return this.http.get<any>(this.baseapiurl+`/api/Doctor/GetByEmail?e=${email}`, {observe:'response'});
  }
}
