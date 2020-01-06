import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyButtonComponent } from './currency-button.component';

describe('CurrencyButtonComponent', () => {
  let component: CurrencyButtonComponent;
  let fixture: ComponentFixture<CurrencyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
