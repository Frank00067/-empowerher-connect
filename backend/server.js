const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (HTML, CSS, JS) from project root
app.use(express.static(path.join(__dirname, '..')));

// Dummy in-memory database
const users = [];

// Register route
app.post('/register', (req, res) => {
  console.log('Register request:', req.body);
  const { email, password } = req.body;
  if (!email || !password) return res.send('Please provide email and password');

  if (users.find(u => u.email === email)) return res.send('User already exists!');
  
  users.push({ email, password });
  console.log('Registered users:', users);
  res.send('✅ Registration successful!');
});

// Login route
app.post('/login', (req, res) => {
  console.log('Login request:', req.body);
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.send('❌ Invalid email or password');

  res.send(`✅ Welcome back, ${email}!`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});