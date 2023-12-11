import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  errorMessage: string | null = null;
  token :string | null = null;

  constructor(private UserService: UserService) {}

  submitLoginForm() {
    this.UserService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: token => this.token = token,
        error: err => {
          if (err.error.message) {
            this.errorMessage = err.error.message
          }
        }
      });
  }
}
