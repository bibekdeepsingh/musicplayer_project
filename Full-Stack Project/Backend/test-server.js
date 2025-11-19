const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

let playlists = [
  { id: "1",  name: "Your Station",     songCount: 215 },
  { id: "2",  name: "Hip-Hop Workout",  songCount: 212 },
  { id: "3",  name: "Sad Hits",         songCount: 140 },
  { id: "4",  name: "Lo-Fi Chill",      songCount: 98 },
  { id: "5",  name: "Focus Mix",        songCount: 76 },
  { id: "6",  name: "Top 50 Global",    songCount: 50 },
  { id: "7",  name: "Throwbacks",       songCount: 132 },
  { id: "8",  name: "Indie Blend",      songCount: 84 },
  { id: "9",  name: "Party Starters",   songCount: 65 },
];

app.get('/api/v1/playlists', (req, res) => {
  console.log('GET /api/v1/playlists called');
  res.json(playlists);
});

app.post('/api/v1/playlists', (req, res) => {
  console.log('POST /api/v1/playlists called with:', req.body);
  const newPlaylist = {
    id: String(playlists.length + 1),
    name: req.body.name,
    songCount: req.body.songCount || 0
  };
  playlists.push(newPlaylist);
  res.status(201).json(newPlaylist);
});

app.delete('/api/v1/playlists/:id', (req, res) => {
  const id = req.params.id;
  console.log('DELETE /api/v1/playlists/' + id);
  playlists = playlists.filter(p => p.id !== id);
  res.json({ message: 'Deleted', id });
});

app.get('/', (req, res) => res.send('Test server OK'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Test server running on http://localhost:${PORT}`);
  console.log(`Test it: http://localhost:${PORT}/api/v1/playlists`);
});
