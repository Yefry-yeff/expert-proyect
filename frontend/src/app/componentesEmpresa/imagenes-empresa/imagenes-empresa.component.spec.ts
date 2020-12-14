import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesEmpresaComponent } from './imagenes-empresa.component';

describe('ImagenesEmpresaComponent', () => {
  let component: ImagenesEmpresaComponent;
  let fixture: ComponentFixture<ImagenesEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenesEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
