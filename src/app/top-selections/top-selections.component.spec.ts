import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSelectionsComponent } from './top-selections.component';

describe('TopSelectionsComponent', () => {
  let component: TopSelectionsComponent;
  let fixture: ComponentFixture<TopSelectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSelectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSelectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
