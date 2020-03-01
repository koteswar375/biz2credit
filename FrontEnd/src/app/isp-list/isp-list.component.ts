import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import isp from '../../assets/lists.json';

@Component({
  selector: 'app-isp-list',
  templateUrl: './isp-list.component.html',
  styleUrls: ['./isp-list.component.css']
})
export class IspListComponent implements OnInit {

  @Output() providerSelected = new EventEmitter<string>();
  ispList;
  constructor() { }

  ngOnInit() {
    this.ispList = isp;
  } 

  selectProvider(event) {
    this.providerSelected.emit(event.target.value);
  }

}
