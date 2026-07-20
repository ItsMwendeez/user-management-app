import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService,User} from '../services/user.service';


@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [ 
    CommonModule, MatIconModule, 
    MatTableModule,MatFormFieldModule,
    MatInputModule, MatPaginatorModule,
    FormsModule  
    ],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
})
export class UsersPage implements OnInit {
  constructor(
    private router: Router,
    private userService :UserService

  ){}

ngOnInit(): void {
  this.users = this.userService.getUsers();
}
   
  users: User[]=[];

    pageSize =5;
    currentPage = 1; 

    searchText = '';

   displayedColumns  = [
    'number',
    'username',
     'email',
     'phone',
     'role',
    'actions'

   ]
   get filteredUsers(): User[] {
  return this.users.filter(user =>
    user.username.toLowerCase().includes(this.searchText.toLowerCase()) ||
    user.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
    user.role.toLowerCase().includes(this.searchText.toLowerCase())
  );
}
    
  get paginatedUsers(): User[] {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  const endIndex = startIndex + this.pageSize;

  return this.filteredUsers.slice(startIndex, endIndex);
}
  
 get totalPages(): number {
  return Math.ceil(this.users.length / this.pageSize);
}

nextPage(): void {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
  }
}

previousPage(): void {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}
get pages(): number[] {
  return Array.from({ length: this.totalPages }, (_, i) => i + 1);
}
goToPage(page: number): void {
  this.currentPage = page;
}
 getRowNumber(index: number): number {
  return (this.currentPage - 1) * this.pageSize + index + 1;
}

editUser(user: User) {
  this.router.navigate(['/register-user'],{
    state:{user:user}
  });
}

deleteUser(user:User):void{
  this.userService.deleteUser(user.id); // service removes the targetd user and reloads the updated list
  this.users = this.userService.getUsers();
}

addUser(): void {
  this.router.navigate(['/register-user']);
}
}
