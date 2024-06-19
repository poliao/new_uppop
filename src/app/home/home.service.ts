import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apibase = 'https://testdeploy-qymn.onrender.com/api/activities'
  
  constructor(private http: HttpClient) { }
  
  getActivities(): Observable<any> {
    return this.http.get(this.apibase);

  }
}
