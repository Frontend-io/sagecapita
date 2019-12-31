import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAcquisitionsComponent } from './latest-acquisitions.component';

describe('LatestAcquisitionsComponent', () => {
  let component: LatestAcquisitionsComponent;
  let fixture: ComponentFixture<LatestAcquisitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestAcquisitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestAcquisitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
