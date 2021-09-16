import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from "@angular/forms"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(private FormBuilder : FormBuilder, private http : HttpClient,private router:Router) { }

  ngOnInit(): void {

    this.signupForm = this.FormBuilder.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      mobile:['',Validators.required]
    })
    }


    signUp(){
      this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
      .subscribe(res=>{
        alert("signup successful.");
        this.signupForm.reset();
        this.router.navigate(['login']);
      },err=>{
        alert("Something went wrong.");
      })
    }
  }


