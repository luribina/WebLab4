import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Data} from "../../model/data";
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: Data[];


  constructor() {
  }

  ngOnInit(): void {
  }


}
