import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMostSeenComponent } from './gallery-most-seen.component';

describe('GalleryMostSeenComponent', () => {
  let component: GalleryMostSeenComponent;
  let fixture: ComponentFixture<GalleryMostSeenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryMostSeenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryMostSeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
