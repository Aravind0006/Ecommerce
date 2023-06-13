import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  loginform: FormGroup;


  constructor(private serv: ServService, private router: Router, private fb: FormBuilder) {

    this.loginform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }


  ngOnInit(): void {

    // this.loginform.controls['firstName'].setValue("");
  }

  // onSubmit(form: any) {
  //   this.router.navigateByUrl("/products");

  // }

  Logsubmit() {
    function xx() {

    }
    this.postSign()
  }



  // login() {
  //   function xx() {

  //   }
  //   this.GetLogin()
  // }

  // GetLogin() {

  //   let l = {
  //     "emailId":this.fb['']
  //   }         
  // }



  postSign() {
    if (this.loginform.invalid) {
      alert('Please Enter all requried fields')
      return
    }

    let x = {
      "userId": 0,
      "name": this.loginform.controls['username'].value,
      "gender": this.loginform.controls['gender'].value,
      "emailId": this.loginform.controls['email'].value,
      "mobileNo": this.loginform.controls['mobile'].value,
      "password": this.loginform.controls['password'].value,
      "createdBy": 1
    }
    this.serv.postSign(x).subscribe((data: any) => {
      // alert(JSON.stringify(data))
      if (data.success == true) {
        this.router.navigateByUrl("/login");

      }


    })

  }
}

  // GetLogin() {

  //   this.serv.GetLogin().subscribe((data: any) => {
  //     this.getSignUp = data
  //   })
  // }