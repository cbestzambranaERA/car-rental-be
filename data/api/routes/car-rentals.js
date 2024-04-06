const express = require('express');

const router = express.Router();

const {json} = require('body-parser');

const CarRental = require('../../../models/car-rental');

router.get('/', async (req, res) => {
  try {
    const carRental = await CarRental.getAllVehicles();

    res.json(carRental);

  } catch (error) {

    res.status(500).json({ error: error.message});

  }
});

router.get('/:id', async (req, res) => {
  try {

    const { id } = req.params;

    const carRental = await CarRental.findVehicleById(id);

    if (carRental) {

      res.json(carRental);

    } else {

      res.status(400).json({message: "Vehicle not found. "});

    }

  } catch (error) {

    res.status(500).json({error: error.message});

  }
});

router.post('/', async (req, res) => {
  try {
    const carRental = await CarRental.insertVehicles(req.body);

    if(carRental) {
      
      res._construct(201).json({message: "Vehicle has been posted. "});

    } else {

      res.status(400).json({message: 'Unable to post vehicle'});

    } catch (error) {

      res.status(500).json({error: error.message});
    }
  }
});

module.exports = router;