import { Component,OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [MatIconModule,  FormsModule],
  templateUrl: './register-user.html',
  styleUrls: ['./register-user.css'],
})
export class RegisterUser  implements OnInit{
  constructor(
    private router: Router,
    private userService: UserService

  ){}

  isEditing = false;
 user: User = {
    id:0,
    username: '',
    email: '',
    phone: '',
    role: ''
  };
 
  ngOnInit() {
  const selectedUser = history.state.user;

  if (selectedUser) {
    this.user ={...selectedUser};
    this.isEditing = true;
  }
}

saveUser(): void{
  if (this.isEditing){
    this.userService.updateUser(this.user);
  }
  this.router.navigate(['/users'])
}
}
