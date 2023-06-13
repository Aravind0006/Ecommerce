import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email :string = ""
  model : any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:any)
  {
  this.router.navigateByUrl("/navbar");

  }
  

}
