import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  headers: HttpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });
  prefix: string = '';

  constructor(
    private http: HttpClient
  ) { }

  // get() {
  //   return "AAAAAAAAAAAAA"
  // }

  get() {
    return this.http.get('/api/main', { headers: this.headers });
  }
}
