// backend/server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Test route
app.get('/test', (req, res) => {
  res.send('✅ Server is running!');
});

// Serve static files (your HTML pages)
app.use(express.static('../'));

// Dummy database (for testing)
const users = []; // This will just hold users in memory

// Register route
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.send('Please provide email and password');
  
  // Check if user exists
  const exists = users.find(u => u.email === email);
  if (exists) return res.send('User already exists!');
  
  users.push({ email, password });
  console.log('Registered users:', users);
  res.send('✅ Registration successful!');
});

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.send('❌ Invalid email or password');
  
  res.send(`✅ Welcome back, ${email}!`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});