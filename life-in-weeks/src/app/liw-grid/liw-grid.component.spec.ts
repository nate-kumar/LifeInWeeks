import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiwGridComponent } from './liw-grid.component';

describe('LiwGridComponent', () => {
  let component: LiwGridComponent;
  let fixture: ComponentFixture<LiwGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiwGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiwGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
