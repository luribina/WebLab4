import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './components/header/header.component';
import {FormComponent} from './components/form/form.component';
import {GraphComponent} from './components/graph/graph.component';
import {TableComponent} from './components/table/table.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {LoginComponent} from './components/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { CheckTextInputDirective } from './validator/check-text-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    GraphComponent,
    TableComponent,
    MainPageComponent,
    LoginComponent,
    CheckTextInputDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
