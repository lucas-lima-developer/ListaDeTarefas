import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7173/api/user/login';
  private userToken = '';
  private errorMessage = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  login(email: string, password: string): void {
    const credentials = { email: 'lucasteste@email.com', 
    password: 'lucas123' }

    const self = this
    
    this.http.post(this.apiUrl, credentials, { observe: 'response' }).subscribe({
      next(response: HttpResponse<any>) {
        if (response.body && response.body.token) {
          self.userToken = response.body.token;
        }
      },
      error: (e: HttpErrorResponse) => {
        if (e.error && e.error.message) {
          self.errorMessage.next(e.error.message);
        }
      },
    }) 
  }

  getErrorMessage() {
    return this.errorMessage.asObservable()
  }
}