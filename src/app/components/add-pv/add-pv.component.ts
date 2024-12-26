import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataParties } from 'src/app/models/data-parties';
import { Pv } from 'src/app/models/pv';
import { PvHasDataParties } from 'src/app/models/PvHasDataParties';
import { SourcePvs } from 'src/app/models/source-pvs';
import { TypePoliceJudic } from 'src/app/models/type-police-judic';
import { DataPartiesService } from 'src/app/services/data-parties.service';
import { PvService } from 'src/app/services/pv.service';
import { AddDataPartieComponent } from '../add-data-partie/add-data-partie.component';
import * as uuid from "uuid";
import { Router, RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-add-pv',
  templateUrl: './add-pv.component.html',
  styleUrls: ['./add-pv.component.css']
})


export class AddPvComponent implements OnInit {

  @Output() outputFromUpdate: EventEmitter<any> = new EventEmitter();
  @Input() updateClicked: boolean = false;
  @Input() pvId?: number;

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;

  static pv: any;
  static ifPvAdded = false;
  pvByUuid: any;
  pvs?: any[];
  newPv = new Pv();
  typePoliceJudics: any = [];
  //typeSourcePvs?:any[];
  addedSucess: boolean = false;
  sourcePvs: any = [];
  typeSourcePvs: any = [];
  dataPartie: any = [];
  //localDataParties!:DataParties[];
  //pvHasDataPartie:PvHasDataParties={};
  localDataParties = AddDataPartieComponent.dataPartie;
  constructor(private pvService: PvService, private dataPartiesService: DataPartiesService, private router: Router) { }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.pvService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              //this.fileInfos = this.uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    }
  }
  // dataParties:any=[]
  dataParties = DataPartiesService.dataParties;
  ngOnInit(): void {
    this.getSourcePvs();
    this.getTypePoliceJudic();
    this.getTypeSourcePvs();
    // localStorage.setItem("dataParties", JSON.stringify(this.localDataParties));
    if (this.pvId) {
      this.findPvById(this.pvId);
    }
  }

  addPv() {
    this.upload();
    // this.newPv.heureRealisation="2022-06-08 17:28:37.000000";
    this.newPv.dataParties = this.localDataParties;
    this.pvService.addPv(this.newPv).subscribe((r) => {
      AddPvComponent.pv = r;
      // this.newPv=new Pv();
      console.log(this.newPv);
      console.log(this.newPv.sourcePvs);
      this.addedSucess = true;
      console.log("dazt");
      AddPvComponent.ifPvAdded = true;
      if (this.newPv.contreInnconue) {
        this.router.navigate(['/home/allpvs'])
      } else {
        this.router.navigate(['/home/adddataparties'])
      }

    });

  }
  updatePv() {
    this.pvService.updatePv(this.newPv).subscribe((r) => {
      this.outputFromUpdate.emit(this.pvs)
    });
  }
  findPvById(id: number) {
    this.pvService.findPvById(id).subscribe(r => {
      this.newPv = r;
    })
  }

  addPvAndDataParties() {
    this.newPv.uuid = uuid.v4();
    this.pvService.addPv(this.newPv).subscribe((r) => {
      console.log("pv bien stocke");

      console.log("lwest")
    });

    console.log("ach katkhawwar  ");
    //alert success
    this.addedSucess = true;
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

  addDataPartiesList() {
    let newPv = this.newPv;
    // // this.newPv.heureRealisation="2022-06-08 17:28:37.000000";
    this.dataPartiesService.addDataPartiesList(this.localDataParties).subscribe((r) => {
      console.log(r);
    });

  }
  getPvs() {
    this.pvService.getAllPvs().subscribe((data: any) => {
      this.pvs = data;

    });
  }

}
