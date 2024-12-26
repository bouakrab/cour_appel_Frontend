import { Component, Input, OnInit } from '@angular/core';
import { DataParties } from 'src/app/models/data-parties';
import { DataPartiesService } from 'src/app/services/data-parties.service';

@Component({
  selector: 'app-add-data-partie',
  templateUrl: './add-data-partie.component.html',
  styleUrls: ['./add-data-partie.component.css']
})
export class AddDataPartieComponent implements OnInit {
  dataParties=new DataParties;
  villeNaiss:any=[];
   static dataPartie:any=[];
   @Input()
   numCart:string="";
   updateButtonClicked=false;
  constructor(private dataPartiesService :DataPartiesService) { }

  ngOnInit(): void {
   this. getAllVille();
   if(this.updateButtonClicked){
    this.getDataPartie(this.numCart)
   }
  }
  updateButton(){
    this.updateButtonClicked=true;
  }

  getDataPartie(numCart:string){
    this.dataPartiesService.getDataPartieByNumCart(numCart).subscribe((data)=>{
      this.dataParties=data;
     });
  }
  addDataParties(){
    // this.newPv.heureRealisation="2022-06-08 17:28:37.000000";
     this.dataPartiesService.addDataParties(this.dataParties).subscribe((r)=>{
      // this.newPv=new Pv();
      console.log(this.dataParties);
      // console.log(this.dataParties.sourcePvs);
       console.log("dazt");
     });
   }

   addDataPartiesLocaly(){
    console.log(this.dataParties)
   // var localdataParties = JSON.parse(localStorage.getItem("dataParties")+"");
   // localdataParties.push(this.dataParties)
   // localStorage.setItem("dataParties", JSON.stringify(localdataParties));
   //this.dataPartie.push();
    //console.log(localdataParties)
    //AddDataPartieComponent.dataPartie.push(this.dataParties);
    //let x=this.dataPartiesService.addDataPartiesLocaly(this.dataPartie);
   }

   addDataPartiesLocaly1(){
   let dp=this.dataParties;
   AddDataPartieComponent.dataPartie?.push(dp)
    console.log(AddDataPartieComponent.dataPartie)
    this.dataParties={}
    console.log(this.dataParties);
  }
  getAllVille(){
    this.dataPartiesService.getVilleNaiss().subscribe((data)=>{
   this.villeNaiss=data;
     });
  }
}
