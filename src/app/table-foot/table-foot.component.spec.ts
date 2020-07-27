import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFootComponent } from './table-foot.component';

describe('TableFootComponent', () => {
  let component: TableFootComponent;
  let fixture: ComponentFixture<TableFootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
