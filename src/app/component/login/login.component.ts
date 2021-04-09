import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { TokenDetail } from 'src/app/models/tokenModel';
import { AuthService } from 'src/app/services/auth.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tokenDetail = new TokenDetail()
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
     private authService:AuthService, private toastrService:ToastrService,private router:Router,private localStorage:SessionStorageService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe(response=>{
        localStorage.setItem("token",response.data.token)
        this.toastrService.success("Giriş Başarılı")
         this.authService.onRefresh()
         this.router.navigateByUrl('/cars');
      },responseError=>{
        this.toastrService.error(responseError.error)
      })
    }
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  logOut(){
    this.authService.logOut();
  }

}
