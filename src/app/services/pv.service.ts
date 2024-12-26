import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataParties } from '../models/data-parties';
import { Pv } from '../models/pv';
import { PvHasDataParties } from '../models/PvHasDataParties';
import { SourcePvs } from '../models/source-pvs';
import { TypePoliceJudic } from '../models/type-police-judic';
import { TypeSourcePv } from '../models/type-source-pv';
import { TokenStorageService } from './authentication/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PvService {
  urlApi="http://localhost:8081/";
  constructor(private http:HttpClient,private tokenStorage :TokenStorageService) { }
  t= this.tokenStorage.getToken();
  token=`Bearer ${this.t}`;
  headers=new HttpHeaders().set("Authorization",this.token) 
  addPv(pv:Pv){   
     let headers=this.headers;
    return this.http.post<Pv>(this.urlApi+"pv/add",pv,{headers});
  
  }

  updatePv(pv:Pv){
    let headers=this.headers;
    return this.http.put<Pv>(this.urlApi+"pv/update/"+pv.id,pv,{headers});
  }
  findPvById(id:number){
    let headers=this.headers;
    return this.http.get<Pv>(this.urlApi+"pv/"+id,{headers});
  }

  getAllPvs(){
   // let token='Bearer '+t;
   
    
   let headers=this.headers;
    return  this.http.get<any[]>(this.urlApi+"pv/all",{headers});
  }

  getSourcePvs(){
    let headers=this.headers;
    return  this.http.get<SourcePvs>(this.urlApi+"sourcepvs/all",{headers});
  }
  getTypePoliceJudic(){
    let headers=this.headers;
    return  this.http.get<TypePoliceJudic>(this.urlApi+"typepolicejudic/all",{headers});
  }

  getTypeSourcePvs(){
    let headers=this.headers;
    return  this.http.get<TypeSourcePv>(this.urlApi+"typesourcepvs/all",{headers});
  }
  addPvHasDataParties(pvHasDataParties:PvHasDataParties){
    let headers=this.headers;
    return this.http.post<Pv>(this.urlApi+"pvshasdataparties/add",pvHasDataParties,{headers});
  }
  findPvByUuid(uuid:string){
    return  this.http.get<Pv>(this.urlApi+"pv/findByUuid/"+uuid);
  }

  pvToDp(numCart:string,id:number){
    let headers=this.headers;
    return this.http.put<Pv>(this.urlApi+"pv/pvToDp/"+numCart+"/"+id,numCart,{headers});
  }
  delete(id:number){
    let headers=this.headers;
    return this.http.delete(this.urlApi+"pv/delete/"+id,{headers});
  }


  upload(file: File): Observable<HttpEvent<any>> {
    let headers=this.headers;
    const formData: FormData = new FormData();
    console.log(file)
    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.urlApi}pv/upload`, formData, {
     
    
      headers
    });

    return this.http.request(req);
  }

  findDpsByPv(id:number){
    let headers=this.headers;
    return this.http.get<DataParties[]>(this.urlApi+"pv/dpsByPv/"+id,{headers});
  }
}
