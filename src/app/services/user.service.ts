
import { Injectable } from '@angular/core';



export interface User {
  id:number;
  username: string;
  email: string;
  phone: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

   private users: User[] = [
     {
      id:101,
      username: 'john_doe',
      email: 'john@gmail.com',
      phone: '0712345678',
      role: 'Admin'
    },
    {
      id:102,
      username: 'jane_smith',
      email: 'jane@gmail.com',
      phone: '0723456789',
      role: 'User'
    },
    {
      id:103,
      username: 'mike_brown',
      email: 'mike@gmail.com',
      phone: '0734567890',
      role: 'Manager'
    },
    {
      id:104,
      username: 'alice_wanjiku',
      email: 'alice@gmail.com',
      phone: '0701123456',
    role: 'User'
},
{
  id:105,
  username: 'brian_otieno',
  email: 'brian@gmail.com',
  phone: '0702234567',
  role: 'Manager'
},
{
  id:106,
  username: 'carol_mwangi',
  email: 'carol@gmail.com',
  phone: '0703345678',
  role: 'Admin'
},
{
  id:107,
  username: 'daniel_kiptoo',
  email: 'daniel@gmail.com',
  phone: '0704456789',
  role: 'User'
},
{
  id:108,
  username: 'esther_njeri',
  email: 'esther@gmail.com',
  phone: '0705567890',
  role: 'Manager'
},
{
  id:109,
  username: 'frank_maina',
  email: 'frank@gmail.com',
  phone: '0706678901',
  role: 'User'
},
{
   id:110,
  username: 'grace_akinyi',
  email: 'grace@gmail.com',
  phone: '0707789012',
  role: 'Admin'
},
{
   id:111,
  username: 'henry_mutiso',
  email: 'henry@gmail.com',
  phone: '0708890123',
  role: 'User'
},
{
   id:112,
  username: 'ivy_chebet',
  email: 'ivy@gmail.com',
  phone: '0709901234',
  role: 'Manager'
},
{
   id:113,
  username: 'james_kimani',
  email: 'james@gmail.com',
  phone: '0711012345',
  role: 'User'
}
  ];

  getUsers(): User[] {
    return [...this.users];
  }

  updateUser(updatedUser : User): void{
    const index = this.users.findIndex(
      user => user.id === updatedUser.id  //we using email to find the user because we assume in this application email is the unique id
    );
     if (index !== -1) {
    this.users[index] = updatedUser;
  }

  }
  deleteUser(id: number): void{
    this.users = this.users.filter(
      user => user.id !== id);
  }
}