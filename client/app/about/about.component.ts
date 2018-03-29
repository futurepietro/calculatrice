import { Component } from '@angular/core';

enum SelectedSide {
  None = 1,
  Left,
  Right
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})

export class AboutComponent {

  numberOne: number;
  numberTwo: number;
  result: number;
  selectedSide: SelectedSide;

  constructor() {
    this.numberOne = 0;
    this.numberTwo = 0;
    this.result = 0;
    this.selectedSide = 1;
  }

  public range(min, max, step) {
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) input.push(i);
    return input;
  }

}
