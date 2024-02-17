// holidayRoutes.js

const express = require('express');
const router = express.Router();
const Holiday = require('../models/Holiday');


// GET all holidays
router.get('/', async (req, res) => {
  try {
    const holidays = await Holiday.find();
    res.json(holidays);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new holiday
router.post('/', async (req, res) => {
  const holiday = new Holiday({
    name: req.body.name,
    date: req.body.date,
  });
  try {
    const newHoliday = await holiday.save();
    res.status(201).json(newHoliday);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
