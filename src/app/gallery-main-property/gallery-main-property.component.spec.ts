import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMainPropertyComponent } from './gallery-main-property.component';

describe('GalleryMainPropertyComponent', () => {
  let component: GalleryMainPropertyComponent;
  let fixture: ComponentFixture<GalleryMainPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryMainPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryMainPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
