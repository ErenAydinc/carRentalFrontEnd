import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl="https://localhost:44373/api/"
  constructor(private httpClient:HttpClient) { }

  // getCarImages():Observable<ListResponseModel<CarDto>>{
  //   let newPath =this.apiUrl+"carImages/getall"
  //   return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
  // }

  getCarImageByCarId(carId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"carImages/carıd?carId="+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  
}
