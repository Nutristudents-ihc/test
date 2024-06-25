import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarObjetivosComponent } from './buscar-objetivos.component';

describe('BuscarObjetivosComponent', () => {
  let component: BuscarObjetivosComponent;
  let fixture: ComponentFixture<BuscarObjetivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarObjetivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarObjetivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
