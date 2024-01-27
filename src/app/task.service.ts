import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://localhost:7173/api/tarefa';

  private tasksSubject = new BehaviorSubject<Task[]>([]);

  constructor(private http: HttpClient, private userService: UserService) {}

  getTasks() : Observable<Task[]> {
    const authToken = this.userService.getToken().getValue();

    if (!authToken) {
      console.error('Token ausente, Usuário não autenticado')
      return new Observable();
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

    const options = { headers: headers };

    this.http.get<Task[]>(this.apiUrl, options).subscribe({
      next: tasks => {
        this.tasksSubject.next(tasks)
      }
    })
    
    return this.tasksSubject;
  }

  createTask(title: string | null | undefined, description : string | null | undefined) {
    const authToken = this.userService.getToken().getValue();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    })

    const options = { headers: headers };

    const body = { title, description };

    const task = this.http.post<Task>(this.apiUrl, body, options).subscribe({
      next: newTask => {
        const currentTasks = this.tasksSubject.getValue();
        const uptadetedTasks = [...currentTasks, newTask];
        this.tasksSubject.next(uptadetedTasks);
      }
    });
  }
}
