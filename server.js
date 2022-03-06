const express = require('express');
const cors = require('cors');
const gradient = require('gradient-string');

const app = express();

app.use(cors());

app.use(express.json());

app.listen(process.env.PORT || 4000, () => console.log(gradient.instagram('Server is toasting it up on port 4000')));