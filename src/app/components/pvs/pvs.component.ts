import { Component, OnInit } from '@angular/core';
import { Pv } from 'src/app/models/pv';
import { TokenStorageService } from 'src/app/services/authentication/token-storage.service';
import { PvService } from 'src/app/services/pv.service';
import { AddDataPartieComponent } from '../add-data-partie/add-data-partie.component';

@Component({
  selector: 'app-pvs',
  templateUrl: './pvs.component.html',
  styleUrls: ['./pvs.component.css']
})
export class PvsComponent implements OnInit {

newPv:any
 pvs: any[] = [];
 pages: number = 1;
 term: string="";
  constructor(private pvService:PvService,private tokenStorageService :TokenStorageService) { }

  ngOnInit(): void {
    this.getPvs();
    
  }
   getPvs(){
    this.pvService.getAllPvs().subscribe((data:any)=>{
      data.reverse();
      this.pvs=data;
      //data.forEach(val => this.pvs.push(Object.assign({}, val)));
      //this.pvs  = [...data];

      console.log(this.pvs[0]);
      
    });
   }

   deleteDataPv(id:number){
    this.pvService.delete(id).subscribe(data=>{
      this.getPvs();
    });
   }

   receiveData(data:any){
       this.getPvs()
    this.pvs=data;
    
  }
}

export class AppComponent {

  term?: string;}
