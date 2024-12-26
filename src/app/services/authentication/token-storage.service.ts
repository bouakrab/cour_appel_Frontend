import { Injectable } from '@angular/core';
const TOKEN_KEY="auth-token";
const USER_KEY="auth-user";
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  signOut(){
    window.sessionStorage.clear();
  }
  public saveToken(token:string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }
  public getToken():string | null{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user:any){
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY,JSON.stringify(user))
  }
  public setUser(){
    let jwt = window.sessionStorage.getItem(TOKEN_KEY)+"";

let jwtData = jwt.split('.')[1]
let decodedJwtJsonData = window.atob(jwtData)
let decodedJwtData = JSON.parse(decodedJwtJsonData)


console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
console.log('decodedJwtData: ' + decodedJwtData.sub)

    window.sessionStorage.setItem("USER_NAME",decodedJwtData.sub);
    
   
  }
}
