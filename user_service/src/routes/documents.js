const express = require('express');
const multer = require('multer');
const { documents } = require('../models/store');
const axios = require('axios');

const upload = multer();
const router = express.Router();

router.post('/', upload.single('file'), async (req, res) => {
  const doc = { id: documents.length + 1, name: req.file.originalname };
  documents.push(doc);
  await axios.post('http://rag_service:8000/ingestion/upload', req.file.buffer, {
    headers: { 'Content-Type': 'application/octet-stream' }
  });
  res.json(doc);
});

module.exports = router;
