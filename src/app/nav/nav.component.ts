import { Component, OnInit } from '@angular/core';
import {ClinetService}  from '../_services/clinet.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private services:ClinetService , public _Router: Router) { }

  phoneNumber:string;
  id:any
  ClientCard(){
   this.services.Search(this.phoneNumber)
   .subscribe((res:any)=>{
     
    this._Router.navigate(['/clientcard/'+res.id])
   })
   }
  ngOnInit(): void {
  }

}
