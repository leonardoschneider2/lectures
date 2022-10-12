const express = require('express');
const { passengerService } = require('../services');

const router = express.Router();

router.post('/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const { startingAddress, endingAddress, waypoints } = req.body;
  const { type, message } = await passengerService.requestTravel(
    passengerId,
    startingAddress,
    endingAddress,
    waypoints,
  );

  if (type) return res.status(errorMap.mapError(type)).json(message);
});

module.exports = router;