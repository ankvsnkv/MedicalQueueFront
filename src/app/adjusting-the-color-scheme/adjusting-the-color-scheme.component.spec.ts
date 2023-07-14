import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustingTheColorSchemeComponent } from './adjusting-the-color-scheme.component';

describe('AdjustingTheColorSchemeComponent', () => {
  let component: AdjustingTheColorSchemeComponent;
  let fixture: ComponentFixture<AdjustingTheColorSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustingTheColorSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustingTheColorSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
