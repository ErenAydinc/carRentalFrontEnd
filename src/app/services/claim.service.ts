import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  apiUrl = "https://localhost:44373/api";
  constructor(private httpClient:HttpClient) { }
}
