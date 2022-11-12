import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getMessage(): Observable<object> {
    return this.httpClient.get(environment.angularApi + '/api/test')
  }

  getMessage2(): Observable<object> {
    return this.httpClient.get(environment.angularApi2 + '/api/test')
  }

}
