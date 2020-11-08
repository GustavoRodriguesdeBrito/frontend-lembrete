import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiarLembreteComponent } from './ediar-lembrete.component';

describe('EdiarLembreteComponent', () => {
  let component: EdiarLembreteComponent;
  let fixture: ComponentFixture<EdiarLembreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdiarLembreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiarLembreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
