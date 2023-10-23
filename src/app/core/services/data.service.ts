import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(options.baseURL, {
      headers: new HttpHeaders()
      .set(options.host, options.hostValue)
      .set(options.key, options.keyValue),
      params: new HttpParams()
      .set('query', 'sport')
    })
  }

  getCreateFeatureData() {
    return this.http.get<any>(options.baseURL, {
      headers: new HttpHeaders()
      .set(options.host, options.hostValue)
      .set(options.key, options.keyValue),
      params: new HttpParams()
      .set('query', 'food')
    })
  }
}

export const options = {
  baseURL: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search',
  host: 'X-RapidAPI-Host',
  hostValue: 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
  key: 'X-RapidAPI-Key',
  keyValue: '986f691b73mshf54734e9495d04cp16b214jsn611ae2df551b'
}
