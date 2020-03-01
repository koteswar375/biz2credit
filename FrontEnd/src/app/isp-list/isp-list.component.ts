import { Component, OnInit, Output, EventEmitter, Input, SimpleChange } from '@angular/core';
import { ISPAPIService } from '../ispapi.service.js';

@Component({
  selector: 'app-isp-list',
  templateUrl: './isp-list.component.html',
  styleUrls: ['./isp-list.component.css']
})
export class IspListComponent implements OnInit {
  @Input() ispDetails;
  @Output() providerSelected = new EventEmitter<string>();
  ispList;
  selectedProvider:string;
  constructor(private apiService: ISPAPIService) { }

  ngOnInit() {
    this.apiService.getISPsList().subscribe(
      (response) => {
        this.ispList = response;
        this.selectedProvider = this.ispList[0];
      }
    )
  }

  selectProvider(event) {
    this.providerSelected.emit(event.target.value);
    this.selectedProvider = event.target.value;
  }

  sort(key:string, order?:string) {
    this.ispDetails.sort((a,b) => {
      if (a[key] < b[key]) {
        return -1;
      } else if (a[key] > b[key]) {
        return 1;
      } else {
        return 0;
      }
    })
    let names = this.ispDetails.map((val) => val.name);
    this.ispList = (order =='reverse') ? names.reverse() : names;
    this.selectedProvider = this.ispList[0];
    this.providerSelected.emit(this.selectedProvider);
  }

  

}
