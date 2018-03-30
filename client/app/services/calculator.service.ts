import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ICalculator } from '../shared/models/calculator.model';

@Injectable()
export class CalculatorService {

  constructor(private http: HttpClient) { }

  getResult(calculator: ICalculator): Observable<ICalculator> {
    return this.http.post<ICalculator>(`/api/calculator/getResult`,calculator);
  }
  
}
