import { Component } from '@angular/core';
import { LucideAngularModule, UserPlus } from 'lucide-angular';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
})
export class UsersPage {
  readonly UserPlus = UserPlus;

}
