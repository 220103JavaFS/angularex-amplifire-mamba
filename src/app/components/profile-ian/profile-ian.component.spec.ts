import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIanComponent } from './profile-ian.component';

describe('ProfileIanComponent', () => {
  let component: ProfileIanComponent;
  let fixture: ComponentFixture<ProfileIanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileIanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileIanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
