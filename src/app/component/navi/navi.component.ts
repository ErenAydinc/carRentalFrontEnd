import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  loginUser:any={};
  constructor(private authService:AuthService,private toastr:ToastrService,private userService:UserService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.loginUser);
  }
  isAuth(){
    return this.authService.isAuthenticated();
  }

  logOut(){
    this.authService.logOut();
    this.toastr.info("çıkış başarılı")
  }
  users(id:number){
    this.userService.getUsersById(id);
    this.toastr.info("bilgiler")
  }
}
