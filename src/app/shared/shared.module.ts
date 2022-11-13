import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShearchBarComponent } from './components/shearch-bar/shearch-bar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SortNumberPipe } from './pipes/sort-number.pipe';
import { ChartModule } from 'primeng/chart';
import { ChartedComponent } from './components/charted/charted.component';

@NgModule({
  declarations: [
    ShearchBarComponent,
    TableComponent,
    SortNumberPipe,
    ChartedComponent,
    SortNumberPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AutoCompleteModule,
    RouterModule,
    TableModule,
    ChartModule,
  ],
  exports: [ShearchBarComponent, TableComponent, ChartedComponent],
})
export class SharedModule {}
