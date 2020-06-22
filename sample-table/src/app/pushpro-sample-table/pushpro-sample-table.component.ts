import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-pushpro-sample-table',
  templateUrl: './pushpro-sample-table.component.html',
  styleUrls: ['./pushpro-sample-table.component.scss']
})
export class PushproSampleTableComponent implements OnInit {
  // declare variable here
  sampleTableData: any;

  constructor() { }

  ngOnInit(): void { }

  // ajax GET request to fetch data
  getData(){
    this.sampleTableData = this.sampleTableData;
    $.ajax({
      url: "https://cors-anywhere.herokuapp.com/http://aimtell.com/files/sites.json",
      method: 'GET',
      context: this,
      dataType: 'json',
      contentType: 'application/json',
      success: function (response) {
          this.sampleTableData = response;
      },
      error: function (err) {
          alert(err.statusText);
      }
    });
  }

}
