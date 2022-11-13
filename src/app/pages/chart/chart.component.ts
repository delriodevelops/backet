import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styles: [
    `
      .title {
        font-size: 2rem;
      }
      .loss {
        color: #a00;
      }
      .gain {
        color: #0a0;
      }
    `,
  ],
})
export class ChartComponent implements OnInit {
  coin: any = '';
  info: any;
  constructor(private router: Router, private searchService: SearchService) {}

  ngOnInit(): void {
    this.coin = this.router.url.split('/').at(-1);
    this.searchService.searchById(this.coin).subscribe((res) => {
      this.info = res;
      this.info = this.info.data;
      console.log(this.info);
    });
  }
}
