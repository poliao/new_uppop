import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://testdeploy-qymn.onrender.com/api/persons/login'; // URL ของ API ที่จะใช้

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(this.apiUrl, loginData);
  }
}