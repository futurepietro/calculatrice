import * as express from 'express';
import CalculatorControler from './controllers/calculator';
import Calculator from './models/calculator';


export default function setRoutes(app) {

  const router = express.Router();

  const calculatorControler = new CalculatorControler();

  // Calculator
  router.route('/calculator/getResult').post(calculatorControler.getResult);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
