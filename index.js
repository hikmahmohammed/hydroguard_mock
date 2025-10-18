const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); 

app.get('/', (req, res) => {
  res.send('HydroGuard API is running 🚰');
});

const devices = [
  { id: 1, location: 'Kitchen', temperature: 23.5, leak: false },
  { id: 2, location: 'Bathroom', temperature: 25.2, leak: true },
  { id: 3, location: 'Basement', temperature: 21.8, leak: false },
];

app.get('/api/devices', (req, res) => {
  res.json(devices);
});

app.get('/api/devices/leaks', (req, res) => {
  const leaks = devices.filter(d => d.leak);
  res.json(leaks);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
