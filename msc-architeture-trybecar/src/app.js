const express = require('express');
const { driverRoutes, passengerRoutes } = require('./routers/index');

const app = express();

app.use(express.json());
app.use('/drivers', driverRoutes);
app.use('/passengers', passengerRoutes);


module.exports = app;
