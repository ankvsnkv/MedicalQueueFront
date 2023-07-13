import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { SchemesOfWorkComponent } from './schemes-of-work.component';

describe('SchemesOfWorkComponent', () => {
  let component: SchemesOfWorkComponent;
  let fixture: ComponentFixture<SchemesOfWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemesOfWorkComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemesOfWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
