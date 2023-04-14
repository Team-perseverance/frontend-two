import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Patient } from '../../admin/view-patients/view-patients.component';
import { Patient } from '../../admin/view-patients/get-patients.service';
import { LoginService, PatientInfo } from '../../login.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit{
  constructor(private router: Router, private patService : LoginService){}
  pat : any[] = []
  isLoading = false
  ngOnInit(): void {
    let email = window.localStorage.getItem("pEmail")
     this.patService.getPatientByEmail(email).subscribe((data) => {
        this.isLoading = true
        data.body?.forEach(p=>{
          this.pat.push(p)
          this.isLoading = false
        })
        console.log(this.pat)
     });
  }
  goBack(){
    this.router.navigate(['patient-dashboard'])
  }
  navToUpdate(){
    this.router.navigate(['update-profile'])
  }
  patients  : Patient[] = [
    {
      email: 'max@gmail.com',
      fullname: 'Max',
      gender: 'male',
      age: 33,
      phone: 8956747589,
      adressLine: '100 avenue road',
      city: 'bangalore',
      state: 'karnataka',
      created: "",
      pasword: ""
    },
  ]
}

