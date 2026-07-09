import { Component } from '@angular/core';
import{LucideAngularModule,Menu} from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly Menu = Menu;
}
