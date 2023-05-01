const express = require('express');
const Entry = require('../models/entryModel');

const router = express.Router();

// GET all entries
router.get('/', (req, res) => {
  res.status(200).json({mssg: 'GET all entries'});
});

// GET a single entry
router.get('/:id', (req, res) => {
  res.status(200).json({mssg: 'GET an entry, id: ' + req.params.id});
});

// CREATE an entry
router.post('/', async (req, res) => {
  const { store, item, totalCost, subTotal, shipping, tax, month, day, year, isNecessary } = req.body;

  try{
    const entry = await Entry.create({ store, item, totalCost, subTotal, shipping, tax, month, day, year, isNecessary});
    res.status(200).json(entry);
  }
  catch (error){
    res.status(500).json({ error: error.message })
  };
});

// DELETE an entry
router.delete('/:id', (req, res) => {
  res.status(200).json({mssg: 'DELETE an entry, id: ' + req.params.id});
});

// UPDATE an entry
router.patch('/:id', (req, res) => {
  res.status(200).json({mssg: 'UPDATE an entry, id: ' + req.params.id});
});

module.exports = router;