import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGaleriaProdutosComponent } from './nav-galeria-produtos.component';

describe('NavGaleriaProdutosComponent', () => {
  let component: NavGaleriaProdutosComponent;
  let fixture: ComponentFixture<NavGaleriaProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavGaleriaProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavGaleriaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
