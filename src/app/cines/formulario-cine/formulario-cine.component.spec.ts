import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCineComponent } from './formulario-cine.component';

describe('FormularioCineComponent', () => {
  let component: FormularioCineComponent;
  let fixture: ComponentFixture<FormularioCineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioCineComponent]
    });
    fixture = TestBed.createComponent(FormularioCineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
