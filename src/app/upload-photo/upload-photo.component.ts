import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';
import {ClinetService} from '../_services/clinet.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {

  constructor(private http:HttpClient , private _Router:Router , private services:ClinetService , private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  Back(){
    this._Router.navigate(['/create/']);
  }


  public uploadFile = (files:any) => {
    const id = this.route.snapshot.paramMap.get('id');
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
      this.services.uploadImage(id   , formData)
      .subscribe(()=>{
        console.log("uploaded");
        this._Router.navigate(['/home/']);
      })

    }
}
