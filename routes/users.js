const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: 'Yenlik' },
  { id: 2, name: 'Sergali' }
];

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

router.post('/', (req, res) => {
  const newUser = {
    id: Date.now(),
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
