import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoButtonAsideComponent } from './info-button-aside.component';

describe('InfoButtonAsideComponent', () => {
  let component: InfoButtonAsideComponent;
  let fixture: ComponentFixture<InfoButtonAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoButtonAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoButtonAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
