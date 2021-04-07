import { Brand } from "./brand";
import { Color } from "./color";

export interface Car{
    id:number;
    colorId:number;
    brandId:number;
    brandName:string;
    colorName:string;
    modelYear:string;
    dailyPrice:number;
    description:string;
    imagePath:string;
    findexPoint:number;

}