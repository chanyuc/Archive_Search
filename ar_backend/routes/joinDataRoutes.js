const express = require('express');
const router = express.Router();
const JoinTables = require('../models/JoinTables');

router.get('/join_tables', async (req, res) => {
    try {
      const joinedData = await JoinTables();
      res.json(joinedData);
    } catch (error) {
      console.error('Error fetching joined data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
