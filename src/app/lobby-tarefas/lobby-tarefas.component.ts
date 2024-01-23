import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-lobby-tarefas',
  standalone: true,
  imports: [CommonModule, TaskListComponent],
  templateUrl: './lobby-tarefas.component.html',
  styleUrl: './lobby-tarefas.component.css'
})
export class LobbyTarefasComponent {

  token: string | null = null;

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.token = this.UserService.getToken().value;
  }

}
