import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { url } from 'inspector';
import { error } from 'console';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: any = null; // Variable to store file
  productList : FormGroup;
  submitted : boolean = false;
  Photo:any;
  PhotoName:any;
  imgUrl:any;
  PhotoPath:any;
  // Inject service 
  constructor(private servService: ServService, private router: Router ,public fb: FormBuilder ,) { 
  this.productList=this.fb.group({
    ProName : [''],
    prodDesc :[''],
    proPrice:[''],
    sellprice:[''],
    prodiscount:[''],
    img : [''],
    proCategory : ['' ]
  })}
  ngOnInit(): void {
  }

  // On file Select
  // onChange(event: any) {
  //   this.file = event.target.files[0];
  // }


  // onChange(event){
  //   if(event.target.files.length > 0){
  //     const file= event.target.files[0];
  //     this.addblogform.get('image').setValue(file);

  //   }
  // }




  // addblogform(){
  //   FormData.append('image',this.addblogform.get('image').value);

  //   this.serv.create_programing_tut(formData)subscribe(
  //     res=>{
  //       if(res.status === 'error'){
  //         this.uploadError = res.message;
  //       }else{
  //         this.done = true;
  //         this.message = "product succesfullly uploaded"
  //         this.router.navigateByUrl("/productdetail")
  //       }
  //       },
  //       error => this.error = error
  //       );
  //     }
  




  submit() {
    // function xx() {
    // }
    this.postproducts()
  }

  postproimage(){
    
    let x = {
      "imgUrl": this.productList.controls['img'].value,
    }
  }

 postproducts() {
    if (this.productList.invalid) {
      alert('Please Enter all requried fields')
      return
    }
    
    let x = { 
      "productId":0,
      "imgUrl": this.PhotoPath,
      "productName": this.productList.controls['ProName'].value,
      "description": this.productList.controls['prodDesc'].value,
      "mrp": this.productList.controls['proPrice'].value,
      "sellingPrice": this.productList.controls['sellprice'].value,
      "discount": this.productList.controls['prodiscount'].value,
      "createdBy": 1,
      "categoryId":1
      // "category" : this.productList.controls['proCategory'].value,
    }
    this.servService.Postproducts(x).subscribe((data: any) => {
      alert(JSON.stringify(data))
      if (data.success == true) {
        this.router.navigateByUrl("/productdetail");
        alert(JSON.stringify(x))
      }
      else {
        alert('false')
      }


    })

  }

  // OnClick of button Upload
  // uploadproduct() {
  //   this.loading = !this.loading;
  //   console.log(this.file);
  //   this.servService.upload(this.file).subscribe(
  //     (event: any) => {
  //       if (typeof (event) === 'object') {

  //         // Short link via api response
  //         this.shortLink = event.link;

  //         this.loading = false; // Flag variable 
  //       }
  //     }
  //   );
  // }

  selectFilePhoto(event:any) {
    this.Photo = event.target.files;
    this.PhotoName = this.Photo[0].name;
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.imgUrl = reader.result;
    }

   this.UploadImage();
  }

  UploadImage() {
    const formData = new FormData();
    if (this.Photo !== null && this.Photo !== undefined && this.Photo.length > 0) {
      formData.append("filekey", this.Photo[0], this.Photo[0].name);
       this.servService.postproimage(formData).subscribe((res: any) => {
        if (res.success == true) {
          this.PhotoPath = res.dbpath;
          alert(JSON.stringify(this.PhotoPath))
        }
      })
    }
  }
}
