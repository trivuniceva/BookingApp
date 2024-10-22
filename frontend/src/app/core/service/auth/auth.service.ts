import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
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
}
