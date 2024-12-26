import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthService } from './services/authentication/auth.service';
import { TokenStorageService } from './services/authentication/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'pvsProject2';
  constructor(){
     
  }
  ngOnInit(){
    console.log("-------- set username -----------")
   
  }

}
