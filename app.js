const express = require('express');
const app = express();
const path = require('path');

//local modules
const storeRouter = require('./routes/storeRouter');
const dataRouter = require('./routes/dataRoute');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
app.use('/',storeRouter);
app.use('/data', dataRouter);

// 404 Error Handling
app.use((req, res) => {
  res.status(404).render('404', { title: '404 Not Found' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
