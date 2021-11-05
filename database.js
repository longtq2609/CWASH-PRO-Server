var mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://hungdieu123:Abc123@cluster0.pew6s.mongodb.net/test';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).catch((err) => {
    console.log(err)
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = db;
