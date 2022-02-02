import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZachComponent } from './zachcomponent.component';



describe('ZachcomponentComponent', () => {
  let component: ZachComponent;
  let fixture: ComponentFixture<ZachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
