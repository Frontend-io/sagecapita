import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationAnimationComponent } from './navigation-animation.component';

describe('NavigationAnimationComponent', () => {
  let component: NavigationAnimationComponent;
  let fixture: ComponentFixture<NavigationAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
