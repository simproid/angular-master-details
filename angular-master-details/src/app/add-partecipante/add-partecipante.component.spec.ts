import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartecipanteComponent } from './add-partecipante.component';

describe('AddPartecipanteComponent', () => {
  let component: AddPartecipanteComponent;
  let fixture: ComponentFixture<AddPartecipanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPartecipanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartecipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
