import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://localhost:7173/api/tarefa';
  private authToken = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJsdWNhc3Rlc3RlQGVtYWlsLmNvbSIsImV4cCI6MTcwMDYzMDgwMX0.RmvLmzuFYXe6VtNslX11EY5RhoLGV-nhFpfEDx5ZTs-3uvOf5RSpcRVv-JwK9IIappkj6kUFp0wKcxku-f7yqQ';

  constructor(private http: HttpClient) {}

  getTasks() : Observable<Task[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`
    });

    const options = { headers: headers };

    const tasks = this.http.get<Task[]>(this.apiUrl, options);
    console.log(tasks)
    return tasks;
  }
}
