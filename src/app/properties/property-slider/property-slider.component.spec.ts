import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySliderComponent } from './property-slider.component';

describe('PropertySliderComponent', () => {
  let component: PropertySliderComponent;
  let fixture: ComponentFixture<PropertySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
