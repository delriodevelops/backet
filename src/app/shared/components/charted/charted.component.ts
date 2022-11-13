import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import zoomPlugin from 'chartjs-plugin-zoom';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-charted',
  templateUrl: './charted.component.html',
})
export class ChartedComponent implements OnInit {
  loading = true;
  response: any;
  labels: any;
  datas: any;
  coin: any = '';
  active: any;
  options = [
    { name: '1D', value: 'd1' },
    { name: '12H', value: 'h12' },
    { name: '6H', value: 'h6' },
    { name: '2H', value: 'h2' },
    { name: '1H', value: 'h1' },
    { name: '30M', value: 'm30' },
    { name: '15M', value: 'm15' },
    { name: '5M', value: 'm5' },
    { name: '1M', value: 'm1' },
  ];
  data = {
    labels: this!.labels,
    datasets: [
      {
        label: `${this!.coin} Price $USD`,
        data: this!.datas,
        fill: true,
        borderColor: '#aaa',
        backgroundColor: 'rgba(0,0,0,.1)',
        tension: 0.1,
      },
    ],
    options: {
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true,
            },
            mode: 'xy',
          },
        },
      },
    },
  };

  constructor(private chartService: ChartService, private router: Router) {}

  ngOnInit() {
    const route = this.router.url.split('/').at(-1);
    this.coin = route;
    this.chartService.getChartData(route).subscribe((res): any => {
      this.response = res;
      this.response = this.response.data;
      this.data.labels = this.response.map((el: any) => {
        return new Date(el.time).toLocaleDateString();
      });
      this.data.datasets[0].data = this.response.map((el: any) => {
        return el.priceUsd;
      });

      this.loading = false;
    });
  }

  selectOption(option: string) {
    this.active = option;
    this.loading = true;

    this.chartService.getChartData(this.coin, option).subscribe((res): any => {
      this.response = res;
      this.response = this.response.data;
      this.data.labels = this.response.map((el: any) => {
        return new Date(el.time).toLocaleDateString();
      });
      this.data.datasets[0].data = this.response.map((el: any) => {
        return el.priceUsd;
      });
      this.loading = false;
    });
  }
}
