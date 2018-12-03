var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	user_id: {type: String, required: true},
	pass: {type: String, required: true},
	user_type: {type: String}
})

var User = module.exports = mongoose.model('User', userSchema);