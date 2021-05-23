import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableDynamicViewComponent } from './mat-table-dynamic-view.component';

describe('MatTableDynamicViewComponent', () => {
  let component: MatTableDynamicViewComponent;
  let fixture: ComponentFixture<MatTableDynamicViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTableDynamicViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableDynamicViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
