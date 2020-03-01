import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IspDetailsComponent } from './isp-details.component';

describe('IspDetailsComponent', () => {
  let component: IspDetailsComponent;
  let fixture: ComponentFixture<IspDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IspDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IspDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
