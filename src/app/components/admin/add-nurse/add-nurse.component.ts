import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Nurse } from './nurse';
import { Router } from '@angular/router';
import { NewNurse, NurseService } from './nurse.service';
import { MatDialog } from '@angular/material/dialog';
import { AddedSnackBarComponent } from '../../doctor/added-snack-bar/added-snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-nurse',
  templateUrl: './add-nurse.component.html',
  styleUrls: ['./add-nurse.component.css']
})
export class AddNurseComponent implements OnInit{
  constructor(private router: Router, private fb : FormBuilder, private service : NurseService, private _snackBar: MatSnackBar) {
  }
  ngOnInit(): void {
    this.nurseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email : ['', [Validators.required, Validators.email]],
      phoneNo: ['',[Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]]
    })
  }

  openSnackBar() {
    this._snackBar.openFromComponent(AddedSnackBarComponent, {
      duration: 2500,
    });
  }

  isLoading = false
  nurse !: NewNurse
  Newnurse !: NewNurse
  nurseForm!: FormGroup;
  createNurse(){
    this.isLoading = true
    console.log(this.nurseForm.getRawValue())
    this.Newnurse = {
      name : this.nurseForm.getRawValue().name,
      email : this.nurseForm.getRawValue().email,
      phoneNo: this.nurseForm.getRawValue().phoneNo,
    }
    this.service.addNurse(this.Newnurse).subscribe((data) => {
      console.log(data.status)
      if(data.status == 400 || data.status == 502){
        window.alert("something went wrong, try after later")
      }else{
        // window.alert("Added!")
        this.openSnackBar()
        this.nurse = data
        this.isLoading = false
      }
    })
  }
  matcher = new MyErrorStateMatcher();
  goBack(){
    this.router.navigate(['admin-dashboard'])
  }
}
