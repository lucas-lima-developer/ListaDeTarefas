import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task | null = null;

  constructor(private taskService: TaskService) {}

  excluirTask() {
    this.taskService.deleteTask(this.task!.id);
  }

  finalizarTarefa() {
    this.task!.isCompleted = !this.task!.isCompleted;

    this.taskService.updateTask(this.task!.id, this.task!.title, this.task!.description, this.task!.isCompleted);
  }
}
