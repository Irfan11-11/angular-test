import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { userModel } from '../users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  allUsers:userModel[] = []

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.api.getAllUsersAPI().subscribe((result:any)=>{
      this.allUsers = result
      console.log(this.allUsers);
    })
  }

  deleteUser(id:any){
    this.api.removeUserAPI(id).subscribe((result:any)=>{
      this.getAllUsers()
    })
  }
}
