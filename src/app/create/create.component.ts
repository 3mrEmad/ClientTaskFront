import { Component, OnInit } from '@angular/core';
import {ClinetService}  from 'src/app/_services/clinet.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public services:ClinetService ,  public _Router: Router) { }

  model:any = {};
  ngOnInit(): void {
  }
id:any

  add(){
    this.services.add(this.model)
    .subscribe((res:any)=>{
      this._Router.navigate(['/uploadPhoto/'+res.id]);
    })
  }

 

}
