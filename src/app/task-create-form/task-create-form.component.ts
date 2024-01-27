import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-create-form.component.html',
  styleUrl: './task-create-form.component.css'
})
export class TaskCreateFormComponent {
  createTaskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  @Output() createTaskButtonClickedEvent = new EventEmitter<boolean>();

  constructor(private TaskService: TaskService, private router: Router) {}

  submitCreateTaskForm() {
    this.TaskService.createTask(this.createTaskForm.value.title, this.createTaskForm.value.description);
    this.createTaskButtonClickedEvent.emit();
  }


}
