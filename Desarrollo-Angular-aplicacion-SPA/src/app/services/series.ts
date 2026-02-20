import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private apiUrl = 'https://peticiones.online/api/series';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(this.apiUrl);
  }

  create(payload: any) {
    return this.http.post<any>(this.apiUrl, payload);
  }
}
