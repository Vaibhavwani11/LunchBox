import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConnectBackendServiceService {


  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://localhost:5000";
   }

  get(uri : string){
     return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri : string,payload:any){
    return this.http.post(`${this.ROOT_URL}/${uri}`,payload);
  }

}
