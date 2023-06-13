import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

    
    //  // Variable to store shortLink from api response
    //  shortLink: string = "";
    //  loading: boolean = false; // Flag variable
    //  file: any = null; // Variable to store file
    //  url: any;
   
    //  // Inject service 
    //  constructor(private servService: ServService) { }
   
     ngOnInit(): void {
     }
   
    //  // On file Select
    //  onChange(event:any) {
    //      this.file = event.target.files[0];
    //  }
   
    //  // OnClick of button Upload
    //  onUpload() {
    //      this.loading = !this.loading;alert("file uploaded")
    //      console.log(this.file);
    //      this.servService.upload(this.file).subscribe(
    //          (event: any) => {
    //              if (typeof (event) === 'object') {
                    
   
    //                  // Short link via api response
    //                  this.shortLink = event.link;
    //                  console.log(this.shortLink)
   
    //                  this.loading = false; // Flag variable 
    //              }
    //          }

             
    //      );
    //  }

  }
