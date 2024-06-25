import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerObjetivosComponent } from './ver-objetivos.component';

describe('VerObjetivosComponent', () => {
  let component: VerObjetivosComponent;
  let fixture: ComponentFixture<VerObjetivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerObjetivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerObjetivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
