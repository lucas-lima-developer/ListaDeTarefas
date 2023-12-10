import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

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

  errorMessage: string = ''

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getErrorMessage().subscribe(errorMessage => {
      this.errorMessage = errorMessage
    })
  }

  submitLoginForm() {
    this.authService.login(this.loginForm.value.email ?? '', this.loginForm.value.password ?? '');
  }
}
