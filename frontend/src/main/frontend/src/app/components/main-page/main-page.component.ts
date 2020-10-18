import { Component, OnInit} from '@angular/core';
import {Data} from "../../model/data";
import {DataService} from "../../service/data.service";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  data: Data[] = [];

  currentData: Data;

  currentR: number=1;

  constructor(public dataService:DataService) {
  }

  ngOnInit(): void {
    this.dataService.getAllData().subscribe((data)=> {
      this.data = data;
    })
  }

  addNewData(newData: Data) {
    this.data.push(newData);
    this.data = this.data.slice();
  }

  deleteData() {
    this.data=[];
  }

  transferDataToGraph(currentData:Data) {
    this.currentData=Object.assign({}, currentData);
  }

  transferRToGraph(currentR: number) {
    this.currentR=currentR;
  }
}
