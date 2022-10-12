const express = require('express');
const { driverService } = request('../services');

const router = express.Router();

// GET
router.get('/open/travels', async (_req, res) => {
  const result = await driverService.getWaitingDriverTravels();
  res.status(200).json(result);
});

// ASSIGN
router.put('/:driverId/travels/:travelId/assign', async (req, res) => {
  const { driverId, travelId } = req.params;
  const { type, message } = await driverService.travelAssign({
    travelId,
    driverId,
  });
  if (type) return res.status(type).json(message);

  return res.status(200).json(message);
});

// START
router.put('/:driverId/travels/:travelId/start', async (req, res) => {
  const { driverId, travelId } = req.params;
  const { type, message } = await driverService.startTravel({
    travelId,
    driverId,
  });

  if (type) return res.status(type).json(message);

  return res.status(200).json(message);
});

// END
router.put('/:driverId/travels/:travelId/end', async (req, res) => {
  const { driverId, travelId } = req.params;
  const { type, message } = await driverService.endTravel({
    travelId,
    driverId,
  });
  if (type) return res.status(type).json(message);

  return res.status(200).json(message);
});

module.exports = router;