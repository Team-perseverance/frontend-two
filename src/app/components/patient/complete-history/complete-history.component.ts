import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompleteInfoService } from './complete-info.service';

@Component({
  selector: 'app-complete-history',
  templateUrl: './complete-history.component.html',
  styleUrls: ['./complete-history.component.css']
})
export class CompleteHistoryComponent implements OnInit{
  constructor(private route : ActivatedRoute,private historyService: CompleteInfoService, private router : Router){}
  completeHistory !: any
  doctors !: any
  doctors_id :string[] = []
  doctor_names : string[] = []
  doctor_imgs: string [] = []
  isLoading = false
  noData = false
  mapped !: any[]
  ngOnInit(){
    let PID !:string
    this.route.params.subscribe(param=>{
      PID = param['id']
    })
    this.historyService.getCompleteInfo(PID).subscribe(res=>{
      this.isLoading = true
      console.log(res.status)
      this.completeHistory = res.body
      this.mapped = Object.keys(this.completeHistory).map(key => ({type: key, value: this.completeHistory[key]}))
      console.log(this.mapped);
      
      // this.mapped = this.mapped.sort((a,b) =>new Date(b.value.date).getTime() - new Date(a.value.date).getTime())
      if(this.completeHistory.length == 0) {
        this.noData = true
        this.isLoading = false
      }
      this.completeHistory.forEach((element: any) => {
        element.moreInfo.forEach((element1: any) => {
          this.doctors_id.push(element1.doctor_Id)
        })
      })
      this.doctors_id.forEach(dids=>{
        this.historyService.getDoctorName(dids).subscribe((res=>{
          this.doctors = res.body
          this.doctors.forEach((doc: any) => {
            this.doctor_names.push(doc.name) 
            this.doctor_imgs.push(doc.imgUrl)
            this.isLoading = false
          })
        }))
      })
    })
  }
  goBack(){
    this.router.navigate(['patient-dashboard'])
  }
}
