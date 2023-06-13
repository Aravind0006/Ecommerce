import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServService {


  // API url
  baseApiUrl = "http://92.205.109.210:8013/Banner/UploadBannerImage"
  serverUrl = 'http://92.205.109.210:8013/Product/UploadProductImage'


  constructor(private http: HttpClient) { }

  // Returns an observable
  upload(file: any): Observable<any> {
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    });
    let options = { headers: headers };
    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("file", file, file.name);

    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData, options)
  }

  Postproducts(go: any) {

    return this.http.post("http://92.205.109.210:8013/Product/InsertProduct", go);
  }

  Getproducts() {
    return this.http.get("http://92.205.109.210:8013/Product/GetAllProducts")
  }

  uploadproduct(upload: any) {
    return this.http.post("http://92.205.109.210:8013/Product/InsertProduct", upload)
  }

  getorders() {
    return this.http.get("http://92.205.109.210:8013/Order/GetOrder")
  }

  Getproimage() {
    return this.http.get("http://92.205.109.210:8013/Product/GetAllProducts")
  }

  postproimage(proimage: any) {
    return this.http.post("http://92.205.109.210:8013/Product/UploadProductImage", proimage)
  }

  GetUserdatas(){
    return this.http.get("http://92.205.109.210:8013/SignUp/GetSignUp")
  }

//   public UploadImage(formData: any) {
//     return this.http.post(this.url + "Student/UploadImage", formData);
// }
  // ///////////////////////////////////////////////FOR IMAGE UPLOAD ///////////////////////////////////////////////////////////////////////////////////
  // create_programing_tut( Mod ){
  //   return this.http.post<any>(this.serverUrl + 'Api/create_programing_tut', Mod).pipe(
  //     catchError(this.handleError)
  //    )
  // }
}


