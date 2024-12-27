const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate user ID - check if it's a number
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  const parsedUserId = parseInt(userId, 10);
  const user = users.find(user => user.id === parsedUserId);
  if (!user) {
    return res.status(404).json({ error: `User with ID ${parsedUserId} not found` });
  }
  res.json(user);
});

// Generic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(3000, () => console.log('Server listening on port 3000'));