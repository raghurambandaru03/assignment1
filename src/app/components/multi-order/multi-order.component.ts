import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';


@Component({
  selector: 'app-multi-order',
  templateUrl: './multi-order.component.html',
  styleUrls: ['./multi-order.component.css']
})
export class MultiOrderComponent implements OnInit {
  private data: any;
  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get('./assets/json/single-order.json').subscribe((res)=>{
      console.log(res);
      this.data = res;
  })
}
  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'MMM D[,] YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: enLocale,
    minDate: new Date(Date.now()), // Minimal selectable date
    maxDate: new Date(Date.now()),  // Maximal selectable date
    barTitleIfEmpty: 'Click to select a date'
  };
}
