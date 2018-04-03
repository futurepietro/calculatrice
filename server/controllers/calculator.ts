import Calculator from '../models/calculator';

export default class CalculatorControler   {
  model = Calculator;
  // Get Result
  getResult = (req, res) => {
    let localCalculator = req.body;
    let randomTimeout =  Math.random();
    randomTimeout = randomTimeout*1500;
    localCalculator.result = localCalculator.numberOne + localCalculator.numberTwo;
    setTimeout(function(){
      res.status(200).json(localCalculator);
    }, randomTimeout);
  }

}
