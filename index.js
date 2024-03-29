const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')


const app = express();

// Init middleware
//app.use(logger);

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// app.get('/', (req, res) => {
//  res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
//Set  static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 2000;

app.listen(PORT);
