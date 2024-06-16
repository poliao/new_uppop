import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  private apiUrl = 'https://api.bytescale.com/v2/accounts/FW25c6H/uploads/form_data';
  private apiKey = 'public_FW25c6H7CCoxWBnKwGUoM2aruQed';

  constructor(private http: HttpClient) { }

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
