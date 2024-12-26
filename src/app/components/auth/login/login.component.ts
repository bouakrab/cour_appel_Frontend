import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { TokenStorageService } from 'src/app/services/authentication/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: "admin",
    password: "123456"
  };
static  isLoggedIn = false;
isLogged=LoginComponent.isLoggedIn;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      LoginComponent.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(): void {
    const { username, password } = this.form;
    console.log(username+password);
    this.authService.login(username, password).subscribe({
      next: (data:any) => {
        console.log(data);
        this.tokenStorage.saveToken(data.JwtToken);
        this.tokenStorage.saveUser(data.JwtToken);

        this.isLoginFailed = false;
        LoginComponent.isLoggedIn = true;
        //this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/'])
       

      },
      error: err => {
       this.isLoginFailed = true;
        this.errorMessage = err.error.message;
       
      }
    });
  }
  reloadPage(): void {
    window.location.reload();
  }
}
