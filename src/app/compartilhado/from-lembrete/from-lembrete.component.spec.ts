import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromLembreteComponent } from './from-lembrete.component';

describe('FromLembreteComponent', () => {
  let component: FromLembreteComponent;
  let fixture: ComponentFixture<FromLembreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromLembreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromLembreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
