import { SourcePlaints } from "./source-plaints";
import { TypePlaints } from "./type-plaints";

export class Plaints {
    id?:number;
    contreInconnu?:boolean;
    referencePlaints?:string;
    datePlaints?:Date;
    dateEnregPlaints?:Date;
    dateFaits?:Date;
    emplaceFaits?:string;
    sujetPlaints?:string;
    typePlaints?:TypePlaints;
    sourcePlaints?:SourcePlaints;
    
}
