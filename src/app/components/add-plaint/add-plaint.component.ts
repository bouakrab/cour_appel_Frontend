import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plaints } from 'src/app/models/plaints';
import { DataPartiesService } from 'src/app/services/data-parties.service';
import { PlaintsService } from 'src/app/services/plaints.service';

@Component({
  selector: 'app-add-plaint',
  templateUrl: './add-plaint.component.html',
  styleUrls: ['./add-plaint.component.css']
})
export class AddPlaintComponent implements OnInit {
  static plaint:any;
  static ifPlaintAdded:boolean=false;
  newPlaint=new Plaints();
  addedSucess=false;
  sourcePlaints?:any[];
  typePlaints?:any[];
  ngOnInit(): void {
    this.getSourcePlaints();
    this.getTypePlaints();
  }
  constructor(private plaintsService: PlaintsService, private dataPartiesService: DataPartiesService,private router:Router) { }
  addPlaint(){
    AddPlaintComponent.ifPlaintAdded=true;
   // this.newPv.dataParties = this.localDataParties;
    this.plaintsService.addPlaints(this.newPlaint).subscribe((r) => {
      AddPlaintComponent.plaint=r;
      // this.newPv=new Pv();
      console.log(this.newPlaint);
      console.log(this.newPlaint.sourcePlaints);
      this.addedSucess = true;
      console.log("dazt");
      this.router.navigate(['/home/adddataparties'])
    });
  }

  getSourcePlaints() {
    this.plaintsService.getSourcePlaint().subscribe((data:any) => {

      this.sourcePlaints = data;
       
    });
    
  }
  getTypePlaints() {
    this.plaintsService.getTypePlaint().subscribe((data:any) => {

      this.typePlaints = data;

    });
  }
}
