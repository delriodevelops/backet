import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, switchMap, tap } from 'rxjs';
export interface Response {
  data: { [key: string]: null | string }[];
  timestamp: number;
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  url = 'https://api.coincap.io/v2/assets/?search=';
  results = new Subject<any>();
  constructor(private http: HttpClient) {}

  search(query: string = '') {
    return this.http.get(this.url + query);
  }
  searchById(query: string) {
    return this.http.get(`https://api.coincap.io/v2/assets/${query}`);
  }
}
