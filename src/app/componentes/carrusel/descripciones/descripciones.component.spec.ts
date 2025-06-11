import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionesComponent } from './descripciones.component';

describe('DescripcionesComponent', () => {
  let component: DescripcionesComponent;
  let fixture: ComponentFixture<DescripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescripcionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
