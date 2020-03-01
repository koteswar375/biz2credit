import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IspDetailsComponent } from './isp-details/isp-details.component';
import { IspListComponent } from './isp-list/isp-list.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './sort.pipe';
@NgModule({
  declarations: [
    AppComponent,
    IspDetailsComponent,
    IspListComponent,
    HeaderComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
