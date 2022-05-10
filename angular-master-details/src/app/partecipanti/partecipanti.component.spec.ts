import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartecipantiComponent } from './partecipanti.component';

describe('PartecipantiComponent', () => {
  let component: PartecipantiComponent;
  let fixture: ComponentFixture<PartecipantiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartecipantiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartecipantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
