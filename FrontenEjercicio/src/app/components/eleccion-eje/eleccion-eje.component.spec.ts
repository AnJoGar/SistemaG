import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccionEjeComponent } from './eleccion-eje.component';

describe('EleccionEjeComponent', () => {
  let component: EleccionEjeComponent;
  let fixture: ComponentFixture<EleccionEjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EleccionEjeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EleccionEjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
