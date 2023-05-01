const express = require('express');
const {
  getEntries,
  getEntry,
  createEntry,
  deleteEntry,
  updateEntry
} = require ('../controllers/entryController');

const router = express.Router();

// GET all entries
router.get('/', getEntries);

// GET a single entry
router.get('/:id', getEntry);

// CREATE an entry
router.post('/', createEntry);

// DELETE an entry
router.delete('/:id', deleteEntry);

// UPDATE an entry
router.patch('/:id', updateEntry);

module.exports = router;