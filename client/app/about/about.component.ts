import { Component } from '@angular/core';

import { CalculatorService } from '../services/calculator.service';
import { Calculator } from '../shared/models/calculator.model';

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

  numberOne: number;
  numberTwo: number;
  result: number;
  selectedSide: SelectedSide;
  calculator : Calculator;

  constructor(private CalculatorService: CalculatorService) {
    this.resetNumbers();
    
  }

  public resetNumbers() {
    this.numberOne = 0;
    this.numberTwo = 0;
    this.result = 0;
    this.selectedSide = 1;
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
      tempString = String(this.numberOne);
      tempString += String(aNumber);
      this.numberOne = +tempString;
    } else if (this.selectedSide == 3) {
      tempString = String(this.numberTwo);
      tempString += String(aNumber);
      this.numberTwo = +tempString;
    }
  }

  public removeLast() {
    if (this.selectedSide == 2) {
      this.numberOne = this.removeNumberInternal(this.numberOne);
    } else if (this.selectedSide == 3) {
      this.numberTwo = this.removeNumberInternal(this.numberTwo);
    }
  }
  public solveProblem() {
    this.calculator.numberOne = this.numberOne;
    this.calculator.numberTwo = this.numberTwo;
    this.calculator.result = 0;
    //this.result = this.numberOne + this.numberTwo;
     this.CalculatorService.getResult(this.calculator).subscribe(
      data => this.calculator = data,
      error => console.log(error),
      () => console.log("finished")
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
