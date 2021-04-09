import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="https://localhost:44373/api/"
  constructor(private httpClient:HttpClient) { }

  

  getUsersById(id:number):Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl+"users/getusersbyid?id="+id;
    return this.httpClient.get<ListResponseModel<User>>(newPath)
  }
}
