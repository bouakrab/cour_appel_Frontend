import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataPartiesService } from 'src/app/services/data-parties.service';
import { PlaintsService } from 'src/app/services/plaints.service';
import { AddDataPartieComponent } from '../add-data-partie/add-data-partie.component';
import { AddPlaintComponent } from '../add-plaint/add-plaint.component';

@Component({
  selector: 'app-plaint-and-data-parties',
  templateUrl: './plaint-and-data-parties.component.html',
  styleUrls: ['./plaint-and-data-parties.component.css']
})
export class PlaintAndDataPartiesComponent implements OnInit {

 
  localDataParties = AddDataPartieComponent.dataPartie;
  dataParties:any=[];

  plaintId?=AddPlaintComponent.plaint.id;
  
  newPlaint = AddPlaintComponent.plaint;
  typePoliceJudics: any = [];
  //typeSourcePvs?:any[];
  addedSucess: boolean = false;
  sourcePlaints?:any[];
  typePlaints?:any[];
  static dataUpdated:any=false;
  constructor(private plaintsService :PlaintsService,private dataPartiesService :DataPartiesService ,private router:Router) { }

  ngOnInit(): void {
    console.log(this.localDataParties)
    this.getSourcePlaint();
    this.getTypePlaint();
    this.getDataPartiesByNumCat();
  }
  
  addPvToDp(){
 
      this.localDataParties.forEach((element:any) => {
        this.plaintsService.plaintToDp(element.numCart,this.plaintId).subscribe((data:any) => {
      
        });
      });
    
 
    
    
    this.router.navigate(["/home/allpvs"])
  }
  updateButton(){
      }

      getSourcePlaint() {
        this.plaintsService.getSourcePlaint().subscribe((data:any) => {
    
          this.sourcePlaints = data;
           
        });
        
      }


    
      getTypePlaint() {
        this.plaintsService.getTypePlaint().subscribe((data:any) => {
    
          this.typePlaints = data;
    
        });
      }

      getDataPartiesByNumCat(){
        this.dataParties=[];
        this.localDataParties.forEach((element:any) => {
          this.dataPartiesService.getDataPartieByNumCart(element.numCart).subscribe((data:any) => {
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
