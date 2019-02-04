import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaNavbarComponent } from './social-media-navbar.component';

describe('SocialMediaNavbarComponent', () => {
  let component: SocialMediaNavbarComponent;
  let fixture: ComponentFixture<SocialMediaNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
