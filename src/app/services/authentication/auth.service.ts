import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

const  urlApi="http://localhost:8081/";
const httpOptions={
  headers:new HttpHeaders().set('Content-Type','application/json')
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
 
  login(username:string,password:string){

    return this.http.post(urlApi+"login",{"username":username,"password":password});

  }
}
