const express = require('express');

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
router.post('/', (req, res) => {
  res.status(200).json({mssg: 'CREATE an entry'});
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