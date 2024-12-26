import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/authentication/token-storage.service';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {

  constructor(private auth:TokenStorageService) { }

  ngOnInit(): void {
    this.auth.setUser();
  }

}
