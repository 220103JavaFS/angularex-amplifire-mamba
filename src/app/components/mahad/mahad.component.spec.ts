import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahadComponent } from './mahad.component';

describe('MahadComponent', () => {
  let component: MahadComponent;
  let fixture: ComponentFixture<MahadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
