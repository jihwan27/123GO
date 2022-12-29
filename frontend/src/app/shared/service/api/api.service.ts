import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  // headers: HttpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });
  headers: { headers: HttpHeaders} = { headers: new HttpHeaders({ 'Content-type': 'application/json' })};
  prefix: string = '';

  constructor(
    private http: HttpClient
  ) { }
  
  get(): Observable<any> {
    return this.http.get('/api/main', this.headers);
  }

  addUser(userName: string): Observable<any> {
    console.log('API SERVICE' + userName);
    return this.http.post('/api/user', {name: userName} , this.headers);
  }
}
