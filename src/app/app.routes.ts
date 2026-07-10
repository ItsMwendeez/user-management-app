import { Routes } from '@angular/router';
import { Home } from './home/home';
import { RegisterUser } from './register-user/register-user';


export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'register',
    component: RegisterUser
  }
];
