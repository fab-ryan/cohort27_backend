const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const port = 5000;

app.use(express.json());

app.use(routes);

app.get('/*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

mongoose
  .set('strictQuery', false)
  .connect(
    'mongodb+srv://ryanfab:ryanfab2571@cluster0.9mubi7v.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log('Database Connected 🌏');
  });

app.listen(port, () => {
  console.log('server is running at port ' + port);
});
