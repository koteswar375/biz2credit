import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IspListComponent } from './isp-list.component';

describe('IspListComponent', () => {
  let component: IspListComponent;
  let fixture: ComponentFixture<IspListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IspListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IspListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
