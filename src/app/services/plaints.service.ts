import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plaints } from '../models/plaints';
import { SourcePlaints } from '../models/source-plaints';
import { TypePlaints } from '../models/type-plaints';
import { TokenStorageService } from './authentication/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PlaintsService {

  urlApi="http://localhost:8081/";
  constructor(private http:HttpClient,private tokenStorage:TokenStorageService) { }
  t= this.tokenStorage.getToken();
  token=`Bearer ${this.t}`;
  headers=new HttpHeaders().set("Authorization",this.token) 

  addPlaints(pv:Plaints){
    let headers=this.headers;
    return this.http.post<Plaints>(this.urlApi+"plaints/add",pv,{headers});
  
  }

  getAllPlaints(t:any){
    let headers=this.headers;
    console.log(t)
    return  this.http.get<Plaints>(this.urlApi+"plaints/all",{headers});
  }

  getSourcePlaint(){
    let headers=this.headers;
    return  this.http.get<SourcePlaints>(this.urlApi+"sourcePlaints/all",{headers});
  }
  getTypePlaint(){
    let headers=this.headers;
    return  this.http.get<TypePlaints>(this.urlApi+"typePlaints/all",{headers});
  }




  plaintToDp(numCart:string,id:number){
    let headers=this.headers;
    return this.http.put<Plaints>(this.urlApi+"plaints/plaintToDp/"+numCart+"/"+id,numCart,{headers});
  }
}
