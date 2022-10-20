import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsperienciaComponent } from './esperiencia.component';

describe('EsperienciaComponent', () => {
  let component: EsperienciaComponent;
  let fixture: ComponentFixture<EsperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
