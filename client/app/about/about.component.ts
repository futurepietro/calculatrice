import { Component } from '@angular/core';

import { CalculatorService } from '../services/calculator.service';
import { ICalculator } from '../shared/models/calculator.model';

enum SelectedSide {
  None = 1,
  Left,
  Right
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {


  public selectedSide: SelectedSide;
  public calculator: ICalculator;
  public isCalculating : boolean;

  constructor(private calculatorService: CalculatorService) {
    this.calculator = { "numberOne": 0, "numberTwo": 0, "result": 0 };
    this.resetNumbers();
  }

  public resetNumbers() {
    this.calculator.numberOne = 0;
    this.calculator.numberTwo = 0;
    this.calculator.result = 0;
    this.selectedSide = 1;
    this.isCalculating = false;
  }

  public changeSide(aSide: number) {
    if (this.selectedSide != aSide) {
      this.selectedSide = aSide;
    } else {
      this.selectedSide = 1;
    }
  }

  public addNumber(aNumber: number) {
    let tempString: string;
    if (this.selectedSide == 2) {
      tempString = String(this.calculator.numberOne);
      tempString += String(aNumber);
      this.calculator.numberOne = +tempString;
    } else if (this.selectedSide == 3) {
      tempString = String(this.calculator.numberTwo);
      tempString += String(aNumber);
      this.calculator.numberTwo = +tempString;
    }
  }

  public removeLast() {
    if (this.selectedSide == 2) {
      this.calculator.numberOne = this.removeNumberInternal(this.calculator.numberOne);
    } else if (this.selectedSide == 3) {
      this.calculator.numberTwo = this.removeNumberInternal(this.calculator.numberTwo);
    }
  }

  public solveProblem() {
    this.calculator.numberOne = this.calculator.numberOne;
    this.calculator.numberTwo = this.calculator.numberTwo;
    this.calculator.result = 0;
    this.isCalculating = true;
    this.calculatorService.getResult(this.calculator).subscribe(
      data => {
        this.calculator = data;
      },
      error => console.log(error),
      () =>  this.isCalculating = false
    );
  }

  private removeNumberInternal(aNumber: number): number {
    let tempString = String(aNumber);
    if (tempString.length > 1) {
      tempString = tempString.substring(0, tempString.length - 1);
    }
    else if (tempString.length == 1) {
      tempString = "0";
    }
    return +tempString;
  }

  public range(min, max, step) {
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) input.push(i);
    return input;
  }

}
