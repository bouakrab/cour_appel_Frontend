import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/authentication/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username?:string|null;
  constructor(private auth:TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    this.username=window.sessionStorage.getItem("USER_NAME");
    console.log("username :"+this.username)
  }
  logout(){
    this.auth.signOut();
    window.location.reload();
    
  }
}
