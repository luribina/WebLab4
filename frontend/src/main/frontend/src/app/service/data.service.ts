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

  private getDataBody(data: Data) {
    return {x: data.x, y: data.y,r: data.r};
  }

  constructor(public httpClient: HttpClient) { }

  public getAllData():Observable<any> {
      return this.httpClient.get(AppComponent.serverUrl+this.dataUrl, {headers:this.dataHeaders()});
  }

  public addNewData(data: Data):Observable<Data> {
      return this.httpClient.post<Data>(AppComponent.serverUrl+this.dataUrl,this.getDataBody(data), {headers:this.dataHeaders()});
  }

  public deleteAllData():Observable<any> {
    return this.httpClient.delete(AppComponent.serverUrl+this.dataUrl,{headers:this.dataHeaders(),responseType:'text'});
  }
}
