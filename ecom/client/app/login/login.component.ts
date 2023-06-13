import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logform : FormGroup;
  submitted : boolean = false;
  model: any = {};

  signindata: any;

constructor(private serv: ServService, private router: Router, private fb: FormBuilder) { 
  
  this.logform = this.fb.group({
    Email : ['',Validators.required],
    password:['',Validators.required],
  })
}


  ngOnInit(): void {
  }
  
  login()
  { 
    // this.submitted = true;
    // console.log(this.logform.value);
    // console.log(this.logform.controls['Email'].value);
  
    function xx(){

    }
    this.GetLogin( )
  }
  GetLogin(){
    // let x = {
    //   "emailId": this.logform.controls['Email'].value,
    //   "password": this.logform.controls['password'].value,
    // } 

    if(this.logform.invalid){
      alert('Please Enter all requried fields')
      return
  }


  
  this.serv.GetLogin(this.logform.controls["Email"].value ,
   this.logform.controls["password"].value).subscribe((data: any) => {
    // alert(JSON.stringify(data))
      if (data.success == true) {
        sessionStorage.setItem("UserId",data.userDtls[0].userId)
        sessionStorage.setItem("Name",data.userDtls[0].name)
      this.router.navigateByUrl("/");
    }


  })


  // alert(JSON.stringify(x))

    // this.serv.GetLogin().subscribe((data:any)=>{
    //   this.signindata=data.getSignUp  
    //   if(x.emailId.Validators  == true , x.password = true){
    //       this.router.navigateByUrl('/prod')
    //   }

    // })

}
}
