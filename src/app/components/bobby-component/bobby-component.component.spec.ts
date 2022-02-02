import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobbyComponentComponent } from './bobby-component.component';

describe('BobbyComponentComponent', () => {
  let component: BobbyComponentComponent;
  let fixture: ComponentFixture<BobbyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BobbyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BobbyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
