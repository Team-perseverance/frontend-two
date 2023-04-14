import { Component, OnInit } from '@angular/core';
import { PreviousAppointmentHistoryService } from '../previous-appointment-history.service';
import { LoginService } from 'src/app/components/login.service';

@Component({
  selector: 'app-previous-appointments',
  templateUrl: './previous-appointments.component.html',
  styleUrls: ['./previous-appointments.component.css']
})
export class PreviousAppointmentsComponent implements OnInit {
  constructor(private service : PreviousAppointmentHistoryService, private serv : LoginService){}
  isLoading = false
  page: number = 1;
  count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [3, 6, 9, 12];
  onTableDataChange(event : any){
    this.page = event
    this.getData()
  }
  onTableSizeChange(event :any){
    this.tableSize = event.target.value
    this.page = 1
    this.getData()
  }
  ngOnInit(): void {
    // patientId:"daa9a94b-157e-4130-bdbe-9e2e2847b566"
    let id
    this.serv.getPatientByEmail(window.localStorage.getItem('pEmail')).subscribe((data) => {
      id = data.body?.at(0)?.patId
      // console.log(id)
    })
    this.getData()
  
  }
  getData(){
    this.service.getAppointment(String(window.localStorage.getItem('patientId'))).subscribe((data)=>{
      this.isLoading = true
      
      this.appot = data.body
      this.mapped = Object.keys(this.appot).map(key => ({type: key, value: this.appot[key]}))
      // console.log(this.mapped)
      this.mapped = this.mapped.sort((a,b) =>new Date(b.value.date).getTime() - new Date(a.value.date).getTime())
      // console.log(this.mapped)
        if(data.status == 200){
          this.isLoading = false
        }
    })    
  }
  appot!:any
  mapped !: any[]
}
