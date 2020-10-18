import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppComponent} from "../app.component";
import {Data} from "../model/data";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl:string='/data'

  private dataHeaders() {
    let dataHeaders= new HttpHeaders().set('Accept', 'application/json');
    dataHeaders = dataHeaders.append('Content-Type', 'application/json');
    dataHeaders = dataHeaders.append('Authorization', 'Basic '+localStorage.getItem('credentials'));
    return dataHeaders;
  }

  constructor(public httpClient: HttpClient) { }

  public getAllData():Observable<Data[]> {
      return this.httpClient.get<Data[]>(AppComponent.serverUrl+this.dataUrl, {headers:this.dataHeaders()});
  }

  public addNewData(data: Data):Observable<Data> {
      return this.httpClient.post<Data>(AppComponent.serverUrl+this.dataUrl,JSON.stringify(data), {headers:this.dataHeaders()});
  }

  public deleteAllData():Observable<string> {
    return this.httpClient.delete(AppComponent.serverUrl+this.dataUrl,{headers:this.dataHeaders(),responseType:'text'});
  }
}
