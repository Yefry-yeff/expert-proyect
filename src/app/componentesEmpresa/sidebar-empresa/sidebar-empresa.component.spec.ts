import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEmpresaComponent } from './sidebar-empresa.component';

describe('SidebarEmpresaComponent', () => {
  let component: SidebarEmpresaComponent;
  let fixture: ComponentFixture<SidebarEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
