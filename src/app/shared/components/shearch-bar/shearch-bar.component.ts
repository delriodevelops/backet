import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-shearch-bar',
  templateUrl: './shearch-bar.component.html',
  styles: [
    `
      .li-result:hover {
        background: #09f;
        color: #fff;
        cursor: pointer;
        transition: background 0.2s ease;
      }
      a {
        decoration: none;
      }
    `,
  ],
})
export class ShearchBarComponent implements OnInit {
  query: string = '';
  results: any = [];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.results.subscribe((res) => (this.results = res));
  }

  search() {
    this.searchService.search(this.query).subscribe((res) => {
      this.results = res;
      this.results = this.results.data;
    });
  }
}
