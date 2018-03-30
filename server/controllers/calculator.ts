import Calculator from '../models/calculator';

export default class CalculatorControler   {
  model = Calculator;
  // Get all
  getResult = (req, res) => {
    console.log("req");
    console.log(req);
    /** 
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    });*/
  }

}
