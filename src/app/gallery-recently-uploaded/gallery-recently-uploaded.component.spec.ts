import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryRecentlyUploadedComponent } from './gallery-recently-uploaded.component';

describe('GalleryRecentlyUploadedComponent', () => {
  let component: GalleryRecentlyUploadedComponent;
  let fixture: ComponentFixture<GalleryRecentlyUploadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryRecentlyUploadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryRecentlyUploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
