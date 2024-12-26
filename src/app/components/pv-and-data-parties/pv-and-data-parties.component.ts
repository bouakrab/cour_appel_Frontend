import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataParties } from 'src/app/models/data-parties';
import { Pv } from 'src/app/models/pv';
import { DataPartiesService } from 'src/app/services/data-parties.service';
import { PvService } from 'src/app/services/pv.service';
import { AddDataPartieComponent } from '../add-data-partie/add-data-partie.component';
import { AddPlaintComponent } from '../add-plaint/add-plaint.component';
import { AddPvComponent } from '../add-pv/add-pv.component';


@Component({
  selector: 'app-pv-and-data-parties',
  templateUrl: './pv-and-data-parties.component.html',
  styleUrls: ['./pv-and-data-parties.component.css']
})

export class PvAndDataPartiesComponent implements OnInit {

  localDataParties = AddDataPartieComponent.dataPartie;
  dataParties:any=[];
  pvId?=AddPvComponent.pv.id;
  
  newPv = AddPvComponent.pv;
  typePoliceJudics: any = [];
  //typeSourcePvs?:any[];
  addedSucess: boolean = false;
  sourcePvs: any = [];
  typeSourcePvs: any = [];
  static dataUpdated:any=false;
  constructor(private pvService :PvService,private dataPartiesService :DataPartiesService ,private router:Router) { }

  ngOnInit(): void {
    console.log(this.localDataParties)
    this.getSourcePvs();
    this.getTypePoliceJudic();
    this.getTypeSourcePvs();
    this.getDataPartiesByNumCat();
  }
  
  addPvToDp(){

         this.localDataParties.forEach((element:any) => {
      this.pvService.pvToDp(element.numCart,this.pvId).subscribe((data) => {
    
      });
    });
    
 
    
    
    this.router.navigate(["home/allpvs"])
  }
  updateButton(){
      }

      getSourcePvs() {
        this.pvService.getSourcePvs().subscribe(data => {
    
          this.sourcePvs = data;
           
        });
        
      }

      getTypePoliceJudic() {
        this.pvService.getTypePoliceJudic().subscribe(data => {
    
          this.typePoliceJudics = data;
    
        });
      }
    
      getTypeSourcePvs() {
        this.pvService.getTypeSourcePvs().subscribe(data => {
    
          this.typeSourcePvs = data;
    
        });
      }

      getDataPartiesByNumCat(){
        this.dataParties=[];
        this.localDataParties.forEach((element:any) => {
          this.dataPartiesService.getDataPartieByNumCart(element.numCart).subscribe((data) => {
            this.dataParties.push(data);
          });
        });
       
        
      }
      

      receiveData(data:any){
       
        this.dataParties=data;
        
      }

      deleteDataPartie(id:number){
        this.dataParties.pop(id);
        this.dataPartiesService.deleteDataParties(id).subscribe(data => {
    
          
           
        });
      }
}
