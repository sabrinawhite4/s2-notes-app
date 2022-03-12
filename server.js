const express = require('express');
const cors = require('cors');
const gradient = require('gradient-string');
const nc = require('./controllers/notesController')
const uc = require('./controllers/userController')

const app = express();

app.use(cors());

app.use(express.json());

app.listen(process.env.PORT || 4000, () => console.log(gradient.instagram('Server is surfin on port 4000')));

// NOTE ENDPOINTS
app.post('/api/note', nc.createNote)
app.delete('/api/note/:id', nc.deleteNote)
app.get('/api/note/all', nc.getNotes)
app.put('/api/note/:id', nc.editNote)
app.get('/api/note/:id', nc.getNote)
// USER ENDPOINTS
app.get('/api/user/:username', uc.getUser)