import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';

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

  errorMessage = '';

  constructor(private UserService: UserService) {}

  submitCadastroForm() {
    this.UserService.cadastrar(this.cadastroForm.value.email ?? '', this.cadastroForm.value.password ?? '');
  }
}
