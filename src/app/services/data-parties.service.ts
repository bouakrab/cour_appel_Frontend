import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataParties } from '../models/data-parties';
import { TokenStorageService } from './authentication/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataPartiesService {
  urlApi="http://localhost:8081/";
 static dataParties :Array<any> = [1,2,3,4];
 


  constructor(private http :HttpClient,private tokenStorage:TokenStorageService) { }
   t= this.tokenStorage.getToken();
   token=`Bearer ${this.t}`;
   headers=new HttpHeaders().set("Authorization",this.token) 
  addDataParties(dataParties:DataParties){
    let headers=this.headers;
    return this.http.post<DataParties>(this.urlApi+"dataparties/add",dataParties,{headers});
  }
  addDataPartiesList(dataParties:DataParties[]){
    let headers=this.headers;
    return this.http.post<DataParties>(this.urlApi+"dataparties/addList",dataParties,{headers});
  }
  getAllDataParties(){
    let headers=this.headers;
    return  this.http.get<DataParties>(this.urlApi+"dataparties/all",{headers});
  }

  addDataPartiesLocaly(dataPartie:DataParties){
    
    DataPartiesService.dataParties.push(2000);
    console.log(DataPartiesService.dataParties)
    return DataPartiesService.dataParties;
  }
  getVilleNaiss(){
    let headers=this.headers;
    return  this.http.get<DataParties>(this.urlApi+"VilleDeNaiss/all",{headers});
  }

  getDataPartieByNumCart(numCart:string){
    let headers=this.headers;
    return  this.http.get<DataParties>(this.urlApi+"dataparties/getByNumCart/"+numCart,{headers});
  }

  updateDataParties(dataParties:DataParties){
    let headers=this.headers;
    return this.http.put<DataParties>(this.urlApi+"dataparties/updateDp/"+dataParties.id,dataParties,{headers});
  }

  deleteDataParties(id:number){
    let headers=this.headers;
    return this.http.delete<DataParties>(this.urlApi+"dataparties/delete/"+id,{headers});
  }
}
