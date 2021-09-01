import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../Interfaces/Client';
import {ClinetService} from '../_services/clinet.service'
@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {

  constructor( private route: ActivatedRoute , private services:ClinetService ) { }


  client:Client;
  ngOnInit(): void {
    this.DispalyData();
  
  }


DispalyData(){

  const id = this.route.snapshot.paramMap.get('id');
  this.services.getclient(id)
  .subscribe((res:Client)=>{
    this.client  = res;
    console.log(res);
  })
}


}
