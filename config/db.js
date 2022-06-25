// Do not expose your credentials in your code.
let atlasDB = "mmongodb+srv://appuser:Fv2Pyz6Rf8gGFmNL@cluster0.of2ed00.mongodb.net/test";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}