import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: string[] = ['Estudar para a faculdade', 'Praticar programação', 'Ir à academia', 'Finalizar projeto de lista de tarefas'];

  getTasks() : string[] {
    return this.tasks;
  }
}
