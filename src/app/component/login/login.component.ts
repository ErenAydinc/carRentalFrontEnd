import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { TokenDetail } from 'src/app/models/tokenModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tokenDetail = new TokenDetail()
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
     private authService:AuthService, private toastrService:ToastrService,private router:Router) { }

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
  decodeToken(token:string){
    let helper = new JwtHelperService()    
    let data = helper.decodeToken(token)    
    this.tokenDetail.email = data.email
    this.tokenDetail.username = data['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
    this.tokenDetail.claims = data['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
  }

}
