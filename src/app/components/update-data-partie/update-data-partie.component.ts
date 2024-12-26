import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataParties } from 'src/app/models/data-parties';
import { DataPartiesService } from 'src/app/services/data-parties.service';
import { AddDataPartieComponent } from '../add-data-partie/add-data-partie.component';

@Component({
  selector: 'app-update-data-partie',
  templateUrl: './update-data-partie.component.html',
  styleUrls: ['./update-data-partie.component.css']
})
export class UpdateDataPartieComponent implements OnInit {
  @Output() outputFromUpdate:EventEmitter<boolean> =new EventEmitter();
  output:boolean=true;
  @Input()
  cin: string = "";
  villeNaiss: any;
  dataParties = new DataParties;
  localDataParties = AddDataPartieComponent.dataPartie;
  dataParties2:any=[];
  constructor(private dataPartiesService: DataPartiesService) { }

  ngOnInit(): void {
    this.getDataPartie(this.cin)
  }
  getDataPartie(numCart: string) {
    this.dataPartiesService.getDataPartieByNumCart(numCart).subscribe((data) => {
      this.dataParties = data;
    });
  }

  getAllVille() {
    this.dataPartiesService.getVilleNaiss().subscribe((data) => {
      this.villeNaiss = data;
    });
  }

  updateDataPartie() {

    this.dataPartiesService.updateDataParties(this.dataParties).subscribe((data) => {
    this.getDataPartiesByNumCat();
    this.outputFromUpdate.emit(this.dataParties2)
    });
    
    
  }
  getDataPartiesByNumCat(){
    this.dataParties2=[];
    this.localDataParties.forEach((element:any) => {
      this.dataPartiesService.getDataPartieByNumCart(element.numCart).subscribe((data) => {
        this.dataParties2.push(data);
      });
    });
    
    
  }
  
}
