import { Component, ViewChild } from '@angular/core';
import { IspDetailsComponent } from './isp-details/isp-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(IspDetailsComponent) ispdetails : IspDetailsComponent;

  title = 'ISP';

  displayDetails(provider) {
    this.ispdetails.displayDetails(provider);
  }
}
