import { Component, OnInit, ChangeDetectorRef, Input, SimpleChange } from '@angular/core';
import { ISPAPIService } from '../ispapi.service.js';

@Component({
  selector: 'app-isp-details',
  templateUrl: './isp-details.component.html',
  styleUrls: ['./isp-details.component.css']
})
export class IspDetailsComponent implements OnInit {
  @Input() ispDetails;
  selectedProviderDetails;
  constructor(private ref: ChangeDetectorRef, private apiService: ISPAPIService) {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes.ispDetails.currentValue) {
      this.selectedProviderDetails = this.ispDetails[0];
    }
  }


  displayDetails(selectedProvider) {
    let arr = this.ispDetails.filter((provider) => (provider.name === selectedProvider));
    this.selectedProviderDetails = arr[0];
  }

}
