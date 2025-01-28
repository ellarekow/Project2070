const sheetDataController = require('./controllers'); // Replace with the path to your module
const config = require('./config');
const morgan = require('morgan');

const express = require('express')
const app = express()

app.use(morgan('tiny'));

app.get('/', sheetDataController)

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}`)
})
