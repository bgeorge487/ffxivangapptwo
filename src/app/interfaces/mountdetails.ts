import { IMountSource } from "./sourcesinterface";

export interface IMountDetails{
    id:number;
    name:string;
    description:string;
    enhancedDescription:string;
    tooltip:string;
    movement:string;
    seats:number;
    owned:string;
    image:string;
    icon:string;
    sources:IMountSource[];
}