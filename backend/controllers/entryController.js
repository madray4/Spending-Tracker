const Entry = require ('../models/entryModel');
const mongoose = require ('mongoose');

// GET all entries
const getEntries = async (req, res) => {
  const entries = await Entry.find({});
  res.status(200).json(entries);
} ;

// GET a single entry
const getEntry = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(500).json({error: 'No such entry'});
  }

  const entry = await Entry.findById(id);
  if(!entry) {
    return res.status(500).json({error: 'No such entry'});
  }
  res.status(200).json(entry);
}

// CREATE an entry
const createEntry = async (req, res) => {
  try{
    const entry = await Entry.create({...req.body});
    res.status(200).json(entry);
  }
  catch (error){
    res.status(500).json({ error: error.message })
  };
};

// DELETE an entry
const deleteEntry = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(500).json({error: 'No such entry'});
  }

  const entry = await Entry.findByIdAndDelete(id);
  if(!entry){
    return res.status(500).json({error: 'No such entry'});
  }
  res.status(200).json(entry)
};

// UPDATE an entry
const updateEntry = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(500).json({error: 'No such entry'});
  }
  const entry = await Entry.findByIdAndUpdate(id, {...req.body});
  if(!entry){
    return res.status(500).json({error: 'No such entry'});
  }
  res.status(200).json(entry);
};

module.exports = {
  getEntries,
  getEntry,
  createEntry,
  deleteEntry,
  updateEntry
};