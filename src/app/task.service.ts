import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://localhost:7173/api/tarefa';

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

    const tasks = this.http.get<Task[]>(this.apiUrl, options);
    
    return tasks;
  }
}
