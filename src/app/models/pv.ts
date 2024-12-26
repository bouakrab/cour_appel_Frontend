import { Time } from "@angular/common";
import { SourcePvs } from "./source-pvs";
import { TypePoliceJudic } from "./type-police-judic";
import { TypeSourcePv } from "./type-source-pv";

export class Pv {

    id?:number;
    numEnvoi?:number;
    datePvs?:string;
    heureRealisation?:string;
    contreInnconue?:boolean;
    subjectPv?:string;
    typeSourcePvs?:TypeSourcePv;
    sourcePvs?:SourcePvs;
    typePoliceJudic?:TypePoliceJudic;
    dataParties?:object[];
    uuid?:string;
}

