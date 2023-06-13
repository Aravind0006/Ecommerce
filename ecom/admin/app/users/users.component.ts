import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  Users: any;

  constructor(private service:ServService) { }
  
  ngOnInit(): void {
    this.Userdatails()
  }
  Userdatails(){
    this.service.GetUserdatas().subscribe((data:any)=>{
      this.Users =data.getSignUp;
      // alert(JSON.stringify(this.Users)) 
    })
  }

}
