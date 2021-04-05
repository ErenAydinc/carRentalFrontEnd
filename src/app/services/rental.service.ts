import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDto } from '../models/rentalDto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44373/api/rentals/getall"
  apiUrl2="https://localhost:44373/api/rentals/details"
  apiUrl3="https://localhost:44373/api/"
  apiUrl4="https://localhost:44373/api/"
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
  getRentalDetails():Observable<ListResponseModel<RentalDto>>{
    return this.httpClient.get<ListResponseModel<RentalDto>>(this.apiUrl2)
  }
  getRentalImages(carId:number):Observable<ListResponseModel<CarDto>>{
    let newPath= this.apiUrl3+"carImages/carıd?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  add(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl4+'rentals/add',rental);
  }
}
