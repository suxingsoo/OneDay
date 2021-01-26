import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../services/models';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users: UserProfile[];


  constructor(
    private userService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(users => {
      this.users = users as UserProfile[];
      console.log(users);
    })
  }

  deleteUser(id){
    axios.post("https://btal-ride.herokuapp.com/api/admin/client"+id).then(res => {
      return this.router.navigate(['/admin/dashboard']);
    }).catch(err => {
      console.log(err)
    })
  }

}