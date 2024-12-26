import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataParties } from 'src/app/models/data-parties';
import { Pv } from 'src/app/models/pv';
import { PvService } from 'src/app/services/pv.service';

@Component({
  selector: 'app-show-pv-and-data-parties',
  templateUrl: './show-pv-and-data-parties.component.html',
  styleUrls: ['./show-pv-and-data-parties.component.css']
})
export class ShowPvAndDataPartiesComponent implements OnInit {

  constructor(private route: ActivatedRoute,private pvService:PvService) { }
  id!:number;
  newPv = new Pv();
  dataParties?:DataParties[];
  ngOnInit(): void {
    let route = this.route.params.subscribe((params: Params): void => {
      this.id = params['id'];
        console.log("hello mother :"+params['id'])
  });
  this.getPv()
  this.getDpsByPv(this.id);
  }

  getPv(){
    this.pvService.findPvById(this.id).subscribe(data=>{
      this.newPv=data;
    });
  }

  getDpsByPv(id:number){
    this.pvService.findDpsByPv(id).subscribe(data=>{
     this.dataParties=data;
     console.log(data)
    })
  }

}
