const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: {
        type: String,
        required: true,
		trim: true,
    },

	lastName: {
        type: String,
        required: true,
		trim: true,
    },

	email: {
		type: String,
		required: true,
		unique: true,
	},

    password: {
        type: String,
        required: true,
    },

	isVerified: {
		type: Boolean,
		default: false,
	}
}, { collection: 'users' });

// schema.pre('save', function (next) {
//     if (this.isModified('password')) {
//         const salt = bcrypt.genSaltSync();
//         this.password = bcrypt.hashSync(this.password, salt);
//     }

//     next();
// })

module.exports = mongoose.model('User', schema);