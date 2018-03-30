import * as express from 'express';

import CatCtrl from './controllers/cat';
import Cat from './models/cat';


import CalculatorControler from './controllers/calculator';
import Calculator from './models/calculator';


export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const calculatorControler = new CalculatorControler();

  // Cats
  router.route('/cats').get(catCtrl.getAll);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

  // Calculator
  router.route('/calculator/getResult').post(calculatorControler.getResult);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
