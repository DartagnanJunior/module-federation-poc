import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usd } from '../models/usd.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private baseUrl = 'https://br.dolarapi.com/v1/cotacoes';

  constructor(private http: HttpClient) {}

  getDolarDayliValue(): Observable<Usd> {
    return this.http.get<Usd>(`${this.baseUrl}/usd`);
  }
}
