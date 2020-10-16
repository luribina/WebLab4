import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle(this.title);
  }
  title = 'а кому сейчас легко';
  static serverUrl = 'http://localhost:10200/server';
}
