import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task | null = null;
  isAtualizarButtonClicked : boolean = false;

  updateTaskForm = new FormGroup({
    title: new FormControl(this.task?.title),
    description: new FormControl(this.task?.description)
  });

  constructor(private taskService: TaskService) {}

  ngOnChanges(changes: SimpleChanges) : void {
    if (changes['task'] && changes['task'].currentValue) {
      const currentTask = changes['task'].currentValue;
      this.updateTaskForm.patchValue({
        title: currentTask.title,
        description: currentTask.description
      });
    }
  }

  excluirTask() {
    this.taskService.deleteTask(this.task!.id);
  }

  finalizarTarefa() {
    this.task!.isCompleted = !this.task!.isCompleted;

    this.taskService.updateTask(this.task!.id, this.task!.title, this.task!.description, this.task!.isCompleted);
  }

  atualizarButtonClicked() {
    this.isAtualizarButtonClicked = !this.isAtualizarButtonClicked;
  }

  submitUpdateTaskForm() {
    if (this.updateTaskForm.value.title && this.updateTaskForm.value.description) {

      this.taskService.updateTask(this.task!.id, this.updateTaskForm.value.title, this.updateTaskForm.value.description, this.task!.isCompleted);
    }
  }
}
