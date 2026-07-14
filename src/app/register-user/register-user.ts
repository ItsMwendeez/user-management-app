import { Component } from '@angular/core';
import { LucideAngularModule, User, Mail, Phone, Shield } from 'lucide-angular';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './register-user.html',
  styleUrls: ['./register-user.css'],
})
export class RegisterUser {
  readonly User = User;
  readonly Mail = Mail;
  readonly Phone = Phone
  readonly Shield = Shield;

}
