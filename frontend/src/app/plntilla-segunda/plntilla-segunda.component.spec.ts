import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlntillaSegundaComponent } from './plntilla-segunda.component';

describe('PlntillaSegundaComponent', () => {
  let component: PlntillaSegundaComponent;
  let fixture: ComponentFixture<PlntillaSegundaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlntillaSegundaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlntillaSegundaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
