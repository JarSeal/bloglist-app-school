const router = require('express').Router();
const Note = require('../models/blog');
const User = require('../models/user');

router.post('/reset', async (request, response) => {
  await Note.deleteMany({});
  await User.deleteMany({});

  response.status(204).end();
});

router.get('/health', async (request, response) => {
  response.send('ok');
});

module.exports = router;