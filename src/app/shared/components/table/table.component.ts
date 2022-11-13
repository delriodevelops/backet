import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
    `
      .tb-header {
        border-bottom: 2px solid #000;
        margin: 12px;
      }
      p-table {
        padding: 12px;
      }
      .tr {
        cursor: pointer;
      }
      .tr:hover {
        transition: all 0.3s ease;
        background: #eee;
      }
      .gainLoss {
        padding: 8px;
        border-radius: 12px;
      }
      .gain {
        color: #0a0;
      }
      .loss {
        color: #a00;
      }
    `,
  ],
})
export class TableComponent implements OnInit {
  coins: any = [];
  cols = [
    { name: 'Rank', value: 'rank' },
    { name: 'Name', value: 'name' },
    { name: 'Price', value: 'priceUsd' },
    { name: 'Chage(24h)', value: 'changePercent24Hr' },
    { name: 'Market Cap', value: 'marketCapUsd' },
    { name: 'Supply', value: 'supply' },
  ];

  loading: boolean = true;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.search().subscribe((res) => {
      this.coins = res;
      this.coins = this.coins.data;
      this.loading = false;
    });
  }
}
