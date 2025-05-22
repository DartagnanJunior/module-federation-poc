import { Component, OnInit, signal } from '@angular/core';
import { CurrencyService } from '../../core/services/currency.service';
import { Usd } from '../../core/models/usd.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dayli-usd',
  imports: [DatePipe],
  templateUrl: './dayli-usd.component.html',
  styleUrl: './dayli-usd.component.scss',
})
export class DayliUsdComponent implements OnInit {
  usdSignal = signal<Usd | undefined>(undefined);
  constructor(private readonly currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.getDolarDayliValue();
  }

  private getDolarDayliValue() {
    this.currencyService.getDolarDayliValue().subscribe((data) => {
      this.usdSignal.set(data);
    });
  }
}
