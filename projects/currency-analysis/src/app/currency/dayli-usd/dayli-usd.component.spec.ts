import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayliUsdComponent } from './dayli-usd.component';

describe('DayliUsdComponent', () => {
  let component: DayliUsdComponent;
  let fixture: ComponentFixture<DayliUsdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayliUsdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayliUsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
