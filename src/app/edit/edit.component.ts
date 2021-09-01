import { Component, OnInit } from '@angular/core';
import {ClinetService} from '../_services/clinet.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
  constructor(private services:ClinetService  , private route: ActivatedRoute , public _Router: Router) { }
  id:any
  model:any = {};
  client:any  = {};
 
  ngOnInit(): void {
     this.id = this.route.snapshot.paramMap.get('id');
   this.services.getclient(this.route.snapshot.paramMap.get('id'))
   .subscribe((res)=>{
     this.client =res;
     this.model  = res;
     console.log(this.client);
   })     
  }




 
  edit(){
    
    this.services.EditClient(this.id , this.model)
    .subscribe((res:any)=>{
      console.log(this.model)
      this._Router.navigate(['/home/']);
    })
    console.log(this.model);
  }

}
