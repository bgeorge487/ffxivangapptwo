import { IMountDetails } from "./mountdetails";

export interface IMountApi{
    count:number;
    results:IMountDetails[];
}