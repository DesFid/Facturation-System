import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = 'http://localhost:3001';
  constructor(public http: HttpClient) { }

  get(query): Promise<any> {
    return this.http.get(`${this.url}/get?${query}`).toPromise();
  }

  post(body): Promise<any> {
    return this.http.post(`${this.url}/post`, {}).toPromise();
  }

  put(body): Promise<any> {
    return this.http.put(`${this.url}/put$`, {}).toPromise();
  }

  delete(query): Promise<any> {
    return this.http.delete(`${this.url}/delete?${query}`).toPromise();
  }
}
