const express = require('express');
const authRoutes = require('./routes/auth');
const docRoutes = require('./routes/documents');

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/documents', docRoutes);

module.exports = app;
