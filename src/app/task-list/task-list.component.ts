import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: string[] = ['Estudar para a faculdade', 'Praticar programação', 'Ir à academia'];
}
