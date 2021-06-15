const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }

});

/*usersSchema.pre('deleteOne', function(next) {
    savedModel.deleteMany({user: this._conditions._id}).exec();
    next();
});*/

const usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;