import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusivePropertiesComponent } from './exclusive-properties.component';

describe('ExclusivePropertiesComponent', () => {
  let component: ExclusivePropertiesComponent;
  let fixture: ComponentFixture<ExclusivePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusivePropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusivePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
