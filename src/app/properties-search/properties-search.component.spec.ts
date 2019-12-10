import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesSearchComponent } from './properties-search.component';

describe('PropertySearchComponent', () => {
  let component: PropertiesSearchComponent;
  let fixture: ComponentFixture<PropertiesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
