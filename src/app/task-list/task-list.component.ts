import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [];
  taskService: TaskService = inject(TaskService);

  constructor() {
    this.tasks = this.taskService.getTasks();
  }
}
