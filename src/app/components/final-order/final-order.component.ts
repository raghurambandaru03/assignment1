import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-final-order',
  templateUrl: './final-order.component.html',
  styleUrls: ['./final-order.component.css']
})
export class FinalOrderComponent implements OnInit {

  constructor() { }
  pieChart = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Pie chart'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Brands',
      data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: 'Internet Explorer',
          y: 11.84
      }, {
          name: 'Firefox',
          y: 10.85
      }, {
          name: 'Edge',
          y: 4.67
      }, {
          name: 'Safari',
          y: 4.18
      }, {
          name: 'Other',
          y: 7.05
      }]
    }]
  });
  barChart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Bar chart'
    },
    xAxis: {
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      title: {
          text: null
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Population (millions)',
          align: 'high'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      valueSuffix: ' millions'
  },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Year 1800',
      data: [107, 31, 635, 203, 2]
  }, {
      name: 'Year 1900',
      data: [133, 156, 947, 408, 6]
  }, {
      name: 'Year 2000',
      data: [814, 841, 3714, 727, 31]
  }, {
      name: 'Year 2016',
      data: [1216, 1001, 4436, 738, 40]
  }]
  });
  ngOnInit() {
  }

}
