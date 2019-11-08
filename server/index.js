const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');

const passport = require('passport');
const { localStrategy } = require('./auth/local');
const { jwtStrategy } = require('./auth/jwt');

const app = express();

app.use(express.json());
app.use(morgan('common'));

app.use(passport.initialize());

passport.use(localStrategy);
passport.use(jwtStrategy);


require('./routes')(app);

connect()
  .on('error', console.log)
  .once('open', listen);


app.get('*', (req, res) => {
  res.end(req.originalUrl);
});

function listen() {
  app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
  });
}
  
function connect() {
    const options = { useNewUrlParser: true };
    mongoose.connect(
      config.db,
      options
    );
    return mongoose.connection;
}