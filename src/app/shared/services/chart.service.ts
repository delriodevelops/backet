import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  data = new Subject<any>();

  constructor(private http: HttpClient) {}

  getChartData(coin: any, interval: string = 'd1') {
    return this.http.get(
      `https://api.coincap.io/v2/assets/${coin}/history?interval=${interval}`
    );
  }
}
