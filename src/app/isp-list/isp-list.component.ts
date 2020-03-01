import { Component, OnInit, Output } from '@angular/core';
import isp from '../../assets/lists.json';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-isp-list',
  templateUrl: './isp-list.component.html',
  styleUrls: ['./isp-list.component.css']
})
export class IspListComponent implements OnInit {

  @Output() providerSelected = new EventEmitter<any>();
  ispList;
  constructor() { }

  ngOnInit() {
    this.ispList = isp;
  } 

  selectProvider(event) {
    this.providerSelected.emit(event.target.value);
  }

}
