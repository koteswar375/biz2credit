import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import isp from '../../assets/lists.json';

@Component({
  selector: 'app-isp-details',
  templateUrl: './isp-details.component.html',
  styleUrls: ['./isp-details.component.css']
})
export class IspDetailsComponent implements OnInit {
  ispDetails;
  selectedProvider;
  constructor(private ref: ChangeDetectorRef) { 
    this.ispDetails =isp;
    this.selectedProvider = this.ispDetails[0];
  }

  ngOnInit() {
  }


  displayDetails( selectedProvider ) {
    let arr = this.ispDetails.filter((provider) => (provider.name === selectedProvider));
    this.selectedProvider = arr[0];
  }

}
