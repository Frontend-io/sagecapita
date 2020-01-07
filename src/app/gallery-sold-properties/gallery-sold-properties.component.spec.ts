import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySoldPropertiesComponent } from './gallery-sold-properties.component';

describe('GallerySoldPropertiesComponent', () => {
  let component: GallerySoldPropertiesComponent;
  let fixture: ComponentFixture<GallerySoldPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerySoldPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySoldPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
