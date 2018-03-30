import * as mongoose from 'mongoose';

const calculatorSchema = new mongoose.Schema({
  numberOne: Number,
  numberTwo: Number,
  result: Number,
});

const Calculator = mongoose.model('Calculator', calculatorSchema);

export default Calculator;
