import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPropertyThumbnailComponent } from './gallery-property-thumbnail.component';

describe('GalleryPropertyThumbnailComponent', () => {
  let component: GalleryPropertyThumbnailComponent;
  let fixture: ComponentFixture<GalleryPropertyThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPropertyThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPropertyThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
