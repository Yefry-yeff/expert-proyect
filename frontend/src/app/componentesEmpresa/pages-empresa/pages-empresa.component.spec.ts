import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEmpresaComponent } from './pages-empresa.component';

describe('PagesEmpresaComponent', () => {
  let component: PagesEmpresaComponent;
  let fixture: ComponentFixture<PagesEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
