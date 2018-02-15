import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Headers, RequestOptions} from '@angular/http';

 @Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  fdata:any={};
  message:any={};
  myFile:File; /* property of File type */
  fileChange(files: any){
    console.log(files);
    this.myFile = files[0].nativeElement;
}

  constructor( private _http:HttpClient) { }

  ngOnInit() {
  }
  //https://stackoverflow.com/questions/45160884/file-upload-and-download-in-angular-4-typescript
  sendEmail(): void {
    console.log(this.fdata);
    let _formData = new FormData();
    _formData.append("name", this.fdata.name);
    _formData.append("email", this.fdata.email);
    _formData.append("subject", this.fdata.subject);
    _formData.append("mobile", this.fdata.mobile);
    _formData.append("content", this.fdata.content);
    _formData.append("MyFile", this.myFile);
    let body = _formData;

    let headers = new Headers();
    let optionss = new RequestOptions({
        headers: headers
    });

    this._http.post("http://example/api/YourAction", body)
     .subscribe((data) => this.message = data);
     console.log(body);
  }

}
