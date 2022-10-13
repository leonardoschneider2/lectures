const dataBaseAccess = require('../bd/activitiesbd');
const express = require('express');

const routes = express.Router();

routes.get(
  '/',
  // MIDDLEWARES
  async (_req, res, _next) => {
    try {
      const data = await dataBaseAccess.readAll();
      console.log(data);
      res.status(200).json({ message: '', data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  },
);

routes.post(
  '/',
  // MIDDLEWARES
  async (req, res, _next) => {
    try {
      const newActivitie = req.body;
      const data = await dataBaseAccess.insert(newActivitie);
      res.status(200).json({ message: '', data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  },
);

routes.get(
  '/:id',
  // MIDDLEWARES
  async (req, res, _next) => {
    try {
      const { id } = req.params;
      const data = await dataBaseAccess.readById(id);
      res.status(200).json({ message: '', data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  },
);

module.exports = routes;