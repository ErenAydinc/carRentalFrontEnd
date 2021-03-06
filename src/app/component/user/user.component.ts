import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    
  }

  getUsersById(id:number){
    this.userService.getUsersById(id).subscribe(response=>{
      this.users=response.data
    })
  }
}
