import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyContactComponent } from './property-contact.component';

describe('PropertyContactComponent', () => {
  let component: PropertyContactComponent;
  let fixture: ComponentFixture<PropertyContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
