const express = require('express');
const jwt = require('jsonwebtoken');

function createAuthRouter({ usersFile, readJSON, writeJSON, SECRET_KEY }) {
  const router = express.Router();

  router.post('/register', (req, res) => {
    // generated-by-copilot: Extract userType from request body, default to "member"
    const { username, password, userType = 'member' } = req.body;
    if (!username || !password) return res.status(400).json({ message: 'Username and password required' });
    const users = readJSON(usersFile);
    if (users.find(u => u.username === username)) {
      return res.status(409).json({ message: 'User already exists' });
    }
    // generated-by-copilot: Add userType field to new user
    users.push({ username, password, favorites: [], userType });
    writeJSON(usersFile, users);
    res.status(201).json({ message: 'User registered' });
  });

  router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const users = readJSON(usersFile);
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    // generated-by-copilot: Include userType in JWT payload and response, default to "member" for existing users
    const userType = user.userType || 'member';
    const token = jwt.sign({ username, userType }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token, userType });
  });

  return router;
}

module.exports = createAuthRouter;
