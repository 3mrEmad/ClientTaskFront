import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators'
import { observable, pipe } from 'rxjs';
import { Client } from '../Interfaces/Client';
import { PaginatedResult} from '../Interfaces/Pagination';
import { Pagination } from '../Interfaces/Pagination';

@Injectable({
  providedIn: 'root'
})
export class ClinetService {

  clients:Client [] = [];
  paginatedResult:PaginatedResult<Client []>   = new PaginatedResult<Client[]>();
  baseUrl:string  = "https://localhost:44375/"
  constructor(private http:HttpClient) { }

   add(model:any){
    return this.http.post(this.baseUrl+"api/AddClient" , model);   
   }

    getClients(page?:number , itemPerPage?:number){
     let params   = new HttpParams();
     if(page !== null && itemPerPage !== null) {

    params =   params.append('pageNumber' , page?.toString()!);
    params =   params.append('pageSize' , itemPerPage?.toString()!);
  }
  return this.http.get<Client[]>
  (this.baseUrl + "api/GetClients",{  observe: 'response', params})
  .pipe(
   map(response =>{
   
    if(response.body !== null){
      this.paginatedResult.result = response.body;
    }

     if(response.headers.get('X-Pagination') !== null){
       
       this.paginatedResult.paginatiosn  = JSON.parse(response.headers.get('X-Pagination')!)
     }

    
     //console.log(this.paginatedResult.result.imagePath)
     for(var i = 0 ; i <this.paginatedResult.result.length ; i++){
 
        if(this.paginatedResult.result[i].imagePath!== null){
      this.paginatedResult.result[i].imagePath=  this.paginatedResult.result[i].imagePath.substring(8);
        }
  }

 


     return this.paginatedResult;
   })
  )
 
   }

  uploadImage(id:any , formData:any){
    return this.http.post(this.baseUrl+"api/UploadPhoto/"+id , formData);
  } 
  
  
  EditClient(id:any , model:any){
      return this.http.put(this.baseUrl+"api/EditClient/"+id , model);
  }

  DeleteClient(id:any){
    return this.http.delete(this.baseUrl+"api/delete/"+id);
  }

  getclient(id:any){
    return this.http.get<Client>(this.baseUrl+"api/GetClient/"+id)
    .pipe(
   map(response=>{
     response.imagePath  = response.imagePath.substring(8);

     return response;
   })
      
    )
  }

  Search(phoneNumber:any){

    return this.http.get(this.baseUrl+"api/Search/"+phoneNumber)
  }


}
