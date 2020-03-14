import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyPhotosComponent } from './property-photos.component';

describe('PropertyPhotosComponent', () => {
  let component: PropertyPhotosComponent;
  let fixture: ComponentFixture<PropertyPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
