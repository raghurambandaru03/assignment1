import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {
  private data: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/json/single-order.json').subscribe((res)=>{
      console.log(res);
      this.data = res;
    })
  }



}
