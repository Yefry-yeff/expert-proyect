import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGaleriaImagenesComponent } from './nav-galeria-imagenes.component';

describe('NavGaleriaImagenesComponent', () => {
  let component: NavGaleriaImagenesComponent;
  let fixture: ComponentFixture<NavGaleriaImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavGaleriaImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavGaleriaImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
