import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Calculator } from '../shared/models/calculator.model';

@Injectable()
export class CalculatorService {

  constructor(private http: HttpClient) { }

  getResult(calculator: Calculator): Observable<Calculator> {
    return this.http.post<Calculator>(`/api/calculator/getResult`,calculator);
  }
  
}
