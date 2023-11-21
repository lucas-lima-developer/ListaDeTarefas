import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Estudar para a faculdade',
      description: 'Preparar para os exames finais',
      isCompleted: false,
      completionDate: null,
      dateCreated: new Date(),
      dateUpdated: new Date()
    },
    {
      id: 2,
      title: 'Praticar programação',
      description: 'Trabalhar em projetos pessoais',
      isCompleted: false,
      completionDate: null,
      dateCreated: new Date(),
      dateUpdated: new Date()
    },
    {
      id: 3,
      title: 'Ir à academia',
      description: 'Fazer exercícios físicos regularmente',
      isCompleted: false,
      completionDate: null,
      dateCreated: new Date(),
      dateUpdated: new Date()
    }
  ];

  getTasks() : Task[] {
    return this.tasks;
  }
}
