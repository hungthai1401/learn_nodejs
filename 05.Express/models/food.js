// mongod --auth --port 27017 --dbpath /Volumes/DATA/Learn/learn_nodejs/05.Express/database
// mongo --port 27017 -u "thainh" -p "123456" --authenticationDatabase "tutorial"

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema =  new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    status: {
        type: [{
            type: Number,
            enum: [0, 1]
        }],
        default: [1]
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// setter
foodSchema.path('name').set((inputString) => {
    return inputString[0].toUpperCase() + inputString.slice(1);
});

module.exports = mongoose.model('food', foodSchema);