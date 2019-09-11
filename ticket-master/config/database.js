const mongoose = require('mongoose')

//db configuration
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/ticket-master', { useNewUrlParser: true})
    .then(() => {
        console.log('successfully connected to mongodb')
    })
    .catch((err) => {
        console.log('error connecting to db', err)
    })

module.exports = mongoose