import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

import { TaskListComponent } from '../task-list/task-list.component';
import { TaskCreateFormComponent } from '../task-create-form/task-create-form.component';

@Component({
  selector: 'app-lobby-tarefas',
  standalone: true,
  imports: [CommonModule, TaskListComponent, TaskCreateFormComponent],
  templateUrl: './lobby-tarefas.component.html',
  styleUrl: './lobby-tarefas.component.css'
})
export class LobbyTarefasComponent {

  token: string | null = null;
  isCreateTaskButtonClicked: boolean = false;

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.token = this.UserService.getToken().value;
  }

  createTaskButtonClicked() {

    this.isCreateTaskButtonClicked = !this.isCreateTaskButtonClicked;
  }
}
