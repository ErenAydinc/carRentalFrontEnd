import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
//import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44373/api/"
  constructor(private httpClient:HttpClient) { }


  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcarsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetailsByBrandAndColor(brandId:number,colorId:number):Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl+"cars/getcarsbybrandidandcolorid?brandId= ${brandId} colorId=  ${colorId}";
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car,)
  }

  // getCarDtos():Observable<ListResponseModel<CarDto>>{
  //   let newPath=this.apiUrl+"cars/details"
  //   return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
  // }
}
