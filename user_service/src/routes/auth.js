const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { users } = require('../models/store');

const router = express.Router();
const SECRET = 'secret';

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  users.push({ username, password: hash });
  res.json({ username });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(401).send('unauthorized');
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).send('unauthorized');
  const token = jwt.sign({ username }, SECRET);
  res.json({ token });
});

module.exports = router;
