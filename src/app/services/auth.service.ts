import { HttpClient } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { faSlash } from '@fortawesome/free-solid-svg-icons';
import { Login } from '../models/login';
import { Register } from '../models/register';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44373/api/auth/';
  TOKEN_KEY="token"
  jwtHelper:JwtHelperService=new JwtHelperService();
  constructor(private httpClient:HttpClient,private router: Router,private localStorage:SessionStorageService) { }

  login(loginModel:Login){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }

  isAuthenticated():boolean{
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

  register(registerModel:Register){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"register",registerModel)
  }

  logOut(){
    localStorage.removeItem(this.TOKEN_KEY);
  }

  async onRefresh() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false }
    const currentUrl = this.router.url + '?'
    return this.router.navigateByUrl(currentUrl).then(() => {
      this.router.navigated = false
      this.router.navigate([this.router.url])
    })
  }
}
