import { Component,OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [MatIconModule,  FormsModule],
  templateUrl: './register-user.html',
  styleUrls: ['./register-user.css'],
})
export class RegisterUser {
  constructor(private router: Router){}
 user = {
    username: '',
    email: '',
    phone: '',
    role: ''
  };
 
  ngOnInit() {
  const selectedUser = history.state.user;

  if (selectedUser) {
    this.user = selectedUser;
  }
}
}
