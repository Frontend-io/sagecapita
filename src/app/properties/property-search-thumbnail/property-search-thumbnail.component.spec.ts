import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySearchThumbnailComponent } from './property-search-thumbnail.component';

describe('PropertySearchThumbnailComponent', () => {
  let component: PropertySearchThumbnailComponent;
  let fixture: ComponentFixture<PropertySearchThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertySearchThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySearchThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
