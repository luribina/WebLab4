import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Data} from "../../model/data";
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, OnChanges {

  @Input() data: Data[];

  @Input() currentData: Data;

  @Input() currentR: number;

  @Output() changeData=new EventEmitter<Data>();

  constructor(private dataService:DataService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.redrawPoints(changes['data'].currentValue);
    }

    if (changes['currentData']) {
      let newData: Data = changes['currentData'].currentValue;
      if (newData !== undefined) setPoint(newData.x, newData.y, newData.r);
    }

    if (changes['currentR']) {
      this.redrawPoints(this.data);
    }
  }

  redrawPoints(newData: Data[]) {
    let points = document.querySelectorAll('.point');
    points.forEach(point => {
      point.remove();
    });
    newData.forEach(data => {
      addPoint(data.x, data.y, this.currentR);
    })

  }

  OnSvgClick(event:MouseEvent) {
    let rec=document.getElementById("svg-graph").getBoundingClientRect();
    let cx=(event.x-rec.left);
    let cy=event.y-rec.top;
    let r=this.currentR;
    let x=Number(((cx-150)*r/(+130)).toPrecision(6));
    let y=Number(((cy-150)*r/(-130)).toPrecision(6));
    this.dataService.addNewData(new Data(x,y,r)).subscribe((result) => {
      this.changeData.emit(result);
    });
  }

}

function addPoint(x: number, y: number, r: number) {
  let graph = document.getElementById('pointGroup');
  let cx = x * 130 / r + 150;
  let cy = y * -130 / r + 150;
  let color = checkPoint(x,y,r)? "green": "red";
  let point = `<circle class="point" r="4" cx="${cx}" cy="${cy}" fill-opacity="0.6" fill="${color}"
              stroke="blue"> </circle>`
  graph.insertAdjacentHTML('beforeend', point);
}

function checkPoint(x: number, y: number, r: number): boolean {
  return (x <= 0 && y >= 0 && y <= (x + r / 2) ||
    x >= 0 && y <= 0 && y >= -r / 2 && x <= r ||
    x <= 0 && y <= 0 && x * x + y * y <= r * r);
}

function setPoint(x: number, y: number, r: number) {
  let point = document.getElementById('pointer');
  point.style.visibility = 'visible';
  point.setAttribute('cx', (x * 130 / r + 150).toString());
  point.setAttribute('cy', (y * -130 / r + 150).toString());
}
