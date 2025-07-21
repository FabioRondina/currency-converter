import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  protected apiServer = environment.apiServer
  protected prod = environment.production
  protected currencyType = environment.currencyType



  constructor(
    private httpClient : HttpClient
  ) {  }



  // get list of currency

  getCurrencyList() : Observable<string[]>{
    return this.httpClient.get<string[]>(this.apiServer.apiUrl + 'currencies' + '?api+key' +this.apiServer.apiKey + '&type=' + this.currencyType);
  }

  // send value to convert

  getConvertedAmount(from : string, to : string , fromAmount : number) : Observable<number>{
    return this.httpClient.get<number>(this.apiServer.apiUrl +'convert' + '?api+key' +this.apiServer.apiKey + '&from=' + from + '&to=' + to + '&amount' + fromAmount)
  }


}
