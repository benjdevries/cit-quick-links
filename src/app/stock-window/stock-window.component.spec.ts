import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockWindowComponent } from './stock-window.component';

describe('StockWindowComponent', () => {
  let component: StockWindowComponent;
  let fixture: ComponentFixture<StockWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
