import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastroForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  errorMessage: string | null = null;

  constructor(private UserService: UserService, private router: Router) {}

  submitCadastroForm() {
    this.UserService.cadastrar(this.cadastroForm.value.email, this.cadastroForm.value.password).subscribe({
      next: response => {
        if (response.body.id) {
          this.router.navigate(["/"]);
        }
      },
      error: err => {
        if (err.error.message) {
          this.errorMessage = err.error.message;
        }
      }
    });
  }
}
