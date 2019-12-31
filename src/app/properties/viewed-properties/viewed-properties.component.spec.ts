import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewedPropertiesComponent } from './viewed-properties.component';

describe('ViewedPropertiesComponent', () => {
  let component: ViewedPropertiesComponent;
  let fixture: ComponentFixture<ViewedPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewedPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewedPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
