import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlntillaPrimeraComponent } from './plntilla-primera.component';

describe('PlntillaPrimeraComponent', () => {
  let component: PlntillaPrimeraComponent;
  let fixture: ComponentFixture<PlntillaPrimeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlntillaPrimeraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlntillaPrimeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
