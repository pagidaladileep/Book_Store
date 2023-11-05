const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://pvdileep4u2:dileep12@cluster0.tnnops0.mongodb.net/BookStore');

const db = mongoose.connection

db.on('error', (error) => {
  console.log('error to connecting with database')
})

db.once('open', function () {
  console.log('Successfully connected to database')
})
