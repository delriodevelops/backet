import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './pages/chart/chart.component';
import { RouterModule } from '@angular/router';
import { SortNumberPipe } from './shared/pipes/sort-number.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, ChartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
