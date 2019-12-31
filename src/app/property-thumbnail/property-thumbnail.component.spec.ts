import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyThumbnailComponent } from './property-thumbnail.component';

describe('PropertyThumbnailComponent', () => {
  let component: PropertyThumbnailComponent;
  let fixture: ComponentFixture<PropertyThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
