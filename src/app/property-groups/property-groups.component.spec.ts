import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyGroupsComponent } from './property-groups.component';

describe('PropertyGroupsComponent', () => {
  let component: PropertyGroupsComponent;
  let fixture: ComponentFixture<PropertyGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
