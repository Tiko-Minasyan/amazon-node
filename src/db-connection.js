const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_HOST, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})