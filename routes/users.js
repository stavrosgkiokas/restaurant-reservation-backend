const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ message: 'Username is required' });

  res.json({ message: `👋 Welcome, ${username}` });
});

module.exports = router;
