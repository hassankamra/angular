import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = "http://178.33.171.2:28/basta";

  constructor(private http: HttpClient) {}
  addnewuser(data: any) {
    return this.http.post(this.url,"/users" ,data);
  }
}
