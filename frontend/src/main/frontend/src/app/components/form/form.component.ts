import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Data} from "../../model/data";
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() changeData = new EventEmitter<Data>();

  @Output() currentData = new EventEmitter<Data>();

  @Output() currentR = new EventEmitter<number>();

  @Output() deleteData=new EventEmitter();

  data: Data=new Data(0,0,1);

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
  }

  addData() {
    this.dataService.addNewData(this.data).subscribe((result) => {
      this.changeData.emit(result);
    });
  }

  transferCurrentData() {
    this.currentData.emit(this.data);
  }

  transferCurrentR() {
    this.currentR.emit(this.data.r);
  }

  deleteAllData() {
    this.dataService.deleteAllData().subscribe(()=>{
      this.deleteData.emit();
    },
      (error)=>{
      console.log(error)
      })
  }
}
