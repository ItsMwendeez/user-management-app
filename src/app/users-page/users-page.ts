import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

interface User{
  username : string;
  email : string;
  phone : string;
  role : string;

}

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
export class UsersPage {

   
   users: User[] = [
    {
      username: 'john_doe',
      email: 'john@gmail.com',
      phone: '0712345678',
      role: 'Admin'
    },
    {
      username: 'jane_smith',
      email: 'jane@gmail.com',
      phone: '0723456789',
      role: 'User'
    },
    {
      username: 'mike_brown',
      email: 'mike@gmail.com',
      phone: '0734567890',
      role: 'Manager'
    },
    {
  username: 'alice_wanjiku',
  email: 'alice@gmail.com',
  phone: '0701123456',
  role: 'User'
},
{
  username: 'brian_otieno',
  email: 'brian@gmail.com',
  phone: '0702234567',
  role: 'Manager'
},
{
  username: 'carol_mwangi',
  email: 'carol@gmail.com',
  phone: '0703345678',
  role: 'Admin'
},
{
  username: 'daniel_kiptoo',
  email: 'daniel@gmail.com',
  phone: '0704456789',
  role: 'User'
},
{
  username: 'esther_njeri',
  email: 'esther@gmail.com',
  phone: '0705567890',
  role: 'Manager'
},
{
  username: 'frank_maina',
  email: 'frank@gmail.com',
  phone: '0706678901',
  role: 'User'
},
{
  username: 'grace_akinyi',
  email: 'grace@gmail.com',
  phone: '0707789012',
  role: 'Admin'
},
{
  username: 'henry_mutiso',
  email: 'henry@gmail.com',
  phone: '0708890123',
  role: 'User'
},
{
  username: 'ivy_chebet',
  email: 'ivy@gmail.com',
  phone: '0709901234',
  role: 'Manager'
},
{
  username: 'james_kimani',
  email: 'james@gmail.com',
  phone: '0711012345',
  role: 'User'
}
  ];

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
  console.log(user);
}
}
