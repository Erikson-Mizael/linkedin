import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoCobrinhaComponent } from './jogo-cobrinha.component';

describe('JogoCobrinhaComponent', () => {
  let component: JogoCobrinhaComponent;
  let fixture: ComponentFixture<JogoCobrinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoCobrinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoCobrinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
