import { Routes } from '@angular/router';
import { Home } from './home/home';
import { RegisterUser } from './register-user/register-user';
import { UsersPage } from './users-page/users-page';


export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'register-user',
    component: RegisterUser
  },
  {
    path: 'users',
    component: UsersPage
  }
];

