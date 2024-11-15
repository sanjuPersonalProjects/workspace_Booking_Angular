// booking-data.service.ts
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GenderWiseGraph } from '../adminModels/gender-wise-graph';



@Injectable({
  providedIn: 'root'
})
export class GenderWiseGraphService {
  private apiUrl = 'https://localhost:7036/api/Charts/genderCharts?date=8%2F17%2F2024';
  GenderWiseGraphData = signal<GenderWiseGraph | null>(null);

  constructor(private http: HttpClient) {}

  getBookingData(): Observable<GenderWiseGraph> {
    return this.http.get<GenderWiseGraph>(this.apiUrl).pipe(
      tap(data => this.GenderWiseGraphData.set(data))
    );
  }
}