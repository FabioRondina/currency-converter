import { Injectable } from '@angular/core';
import {environment} from './environment'

@Injectable({
  providedIn: 'root'
})
export class APIserviceService {
  private APiKey =environment.apiKey
  private baseUrl = environment.apiUrl
  private isProduction =environment.production

  constructor(
    private http: HttpClient
  ) { }

  getData(){
    const headers = { `Authorization: Bearer ${this.APiKey}`};
    return this.http.get(${this.baseUrl}/)
  }
}
