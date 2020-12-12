import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoEmpresaComponent } from './producto-empresa.component';

describe('ProductoEmpresaComponent', () => {
  let component: ProductoEmpresaComponent;
  let fixture: ComponentFixture<ProductoEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
