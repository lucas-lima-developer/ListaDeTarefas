import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7173/api/user';

  private userToken = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      this.userToken.next(storedToken);
    }
   }

  login(email: string | null | undefined, password: string | null | undefined): Observable<string> {
    const credentials = { email, password };
  
    return this.http.post<any>(`${this.apiUrl}/login`, credentials, { observe: 'response' }).pipe(
      map(response => {
        if (response.body && response.body.token) {
          const token = response.body.token;
          
          this.userToken.next(token);

          localStorage.setItem('token', token);

          return token;
        }
      })
    );
  }

  cadastrar(email: string | null | undefined, password: string | null | undefined) : Observable<any> {
    const body = { email, password };

    return this.http.post(`${this.apiUrl}/register`, body, { observe: 'response' });
  }

  getToken() : BehaviorSubject<string | null> {
    return this.userToken;
  }
}