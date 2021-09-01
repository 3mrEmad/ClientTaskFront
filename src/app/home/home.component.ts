import { Component, OnInit } from '@angular/core';
import {ClinetService} from 'src/app/_services/clinet.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import  {Client} from '../Interfaces/Client'
import {Pagination}  from '../Interfaces/Pagination'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private services:ClinetService , private _router:Router ) { }

    clinets:Client[] = [];
    //pagination:Pagination;
    pagination:Pagination;
    pageNumber  = 1
    pageSize  =  3
    imagePath: any[] = [];
    marticalState: any[] = [];

    
    ngOnInit(): void {
     this.loadClient();
    }

   


edit(id:any){
  this._router.navigate(['/edit/'+id]);
}
delete(id:any){
this.services.DeleteClient(id)
.subscribe((res)=>{
  this._router.navigate(['/getUsers/']);
})
}
  

loadClient(){
  this.services.getClients(this.pageNumber , this.pageSize)
  .subscribe((res)=>{
    this.clinets = res.result;
    this.pagination   = res.paginatiosn;
    console.log(this.clinets)
    
  })
}

pageChange(event:any){
  this.pageNumber= event.page;
  this.loadClient();
  }

  getClients(){
  this.services.getClients()
 .subscribe((res:any)=>{
  this.clinets = res;   
  console.log(res); 
 
})
  }




}
