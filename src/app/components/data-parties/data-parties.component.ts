import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataPartiesService } from 'src/app/services/data-parties.service';
import { AddDataPartieComponent } from '../add-data-partie/add-data-partie.component';
import { AddPvComponent } from '../add-pv/add-pv.component';
import { Location } from '@angular/common';
import { AddPlaintComponent } from '../add-plaint/add-plaint.component';
@Component({
  selector: 'app-data-parties',
  templateUrl: './data-parties.component.html',
  styleUrls: ['./data-parties.component.css']
})
export class DataPartiesComponent implements OnInit {
  localDataParties = AddDataPartieComponent.dataPartie;
  pv=AddPvComponent.pv;
  constructor(private dataPartiesService:DataPartiesService,private router:Router,private location:Location) { }

  ngOnInit(): void {
  }


  addDataPartiesList() {
 
    // // this.newPv.heureRealisation="2022-06-08 17:28:37.000000";
    this.dataPartiesService.addDataPartiesList(this.localDataParties).subscribe((data) => {
    
    });
    if(AddPlaintComponent.ifPlaintAdded){
      this.router.navigate(['/home/plaintAndDataParties'])
    }

    if( AddPvComponent.ifPvAdded){
      this.router.navigate(['/home/pvAndDataParties'])
    }

    console.log("for plaint:"+AddPlaintComponent.ifPlaintAdded);
    console.log("for pv:"+AddPvComponent.ifPvAdded);
  }

  goBack(){
    //this.location.back();
    this.router.navigate(["/home/addpv"]);
  }
}
