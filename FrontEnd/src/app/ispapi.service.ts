import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment'; 
@Injectable({
  providedIn: 'root'
})
export class ISPAPIService {

  constructor(private http: HttpClient) { }

  getISPsList ( ) {
    return this.http.get(`${environment.API_URL}:${environment.PORT}/api/isplist`); 
  }

  getISPsDetails ( ) {
    return this.http.get(`${environment.API_URL}:${environment.PORT}/api/ispdetails`); 
  }

  getISPProviderDetails ( name ) {
    return this.http.get(`${environment.API_URL}:${environment.PORT}/ispproviderdetail/:name`); 
  }
}
