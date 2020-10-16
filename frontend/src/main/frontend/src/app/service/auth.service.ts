import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user";
import {AppComponent} from "../app.component";
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authHeaders(user: User) {
    let headers: HttpHeaders = new HttpHeaders().set('Accept', 'application/json');
    headers = headers.append('Authorization', 'Basic ' + btoa(user.username + ':' + user.password));
    return headers;

  }

  constructor(public httpClient: HttpClient) {
  }

  isAuthenticated(): boolean {
    const isAuthenticated = localStorage.getItem('loginedUser');
    return isAuthenticated !== null;
  }

  public login(user: User) {
    return this.httpClient.get(AppComponent.serverUrl + '/auth/login', {headers: this.authHeaders(user)});
  }

  public register(user: User) {
    return this.httpClient.post(AppComponent.serverUrl + '/auth/register', user, {responseType: 'text'});
  }

  public logout() {
    this.deleteStorageItems();
    return;
  }

  public deleteStorageItems() {
    localStorage.removeItem('credentials');
    localStorage.removeItem('loginedUser');
  }

  public createStorageItems(user: User) {
    localStorage.setItem('credentials', btoa(user.username + ':' + user.password));
    localStorage.setItem('loginedUser', user.username);
  }

  public getCurrentUser() {
    return localStorage.getItem("loginedUser");
  }
}
