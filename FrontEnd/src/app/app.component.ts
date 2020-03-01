import { Component, ViewChild } from '@angular/core';
import { IspDetailsComponent } from './isp-details/isp-details.component';
import { ISPAPIService } from './ispapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(IspDetailsComponent) ispdetailsComponent : IspDetailsComponent;
  ispDetails: Object;

  constructor(private apiService:ISPAPIService) {

    }
  ngOnInit() {
    this.apiService.getISPsDetails().subscribe(
      (response) => {
        this.ispDetails = response;
      }
    )
  }

  displayDetails(name) {
    this.ispdetailsComponent.displayDetails(name);
  }
}
