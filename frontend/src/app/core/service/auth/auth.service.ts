import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRoleSubject = new BehaviorSubject<string>('');
  userRole$ = this.userRoleSubject.asObservable();

  private apiUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    console.log("uso u log")

    let user = localStorage.getItem('user');
    if (user) {
      console.log("rola: ")
      let parsedUser = JSON.parse(user);
      console.log(parsedUser.userRole);

      this.userRoleSubject.next(parsedUser.userRole);
    }


    // this.userRoleSubject.next()

    console.log("uso u log")


    return this.http.post(this.apiUrl, { email, password });
  }

  register(userData: any): Observable<any> {
    console.log(userData.email)
    console.log(userData.password)

    return this.http.post<any>(`${this.apiUrl}/register`, userData).pipe(
      catchError(error => {
        console.error('Registration error:', error);
        return throwError(error);
      })
    );
  }

  logout() {
    const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
    const sessionId = currentUser.sessionId;

    console.log("juzeriii", currentUser);

    if (!sessionId) {
      console.error('No session ID found');
      return;
    }

    this.http.post('/api/logout', { sessionId }).subscribe(
      response => {
        console.log('Logout successful:', response);

        localStorage.removeItem('user');
        this.userRoleSubject.next('');
      },
      error => {
        console.error('Logout failed:', error);
      }
    );

  }
}
