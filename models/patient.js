var mongoose = require('mongoose');

// This is the schema.  Note the types, validation and trim
// statements.  They enforce useful constraints on the data.
var patientSchema = new mongoose.Schema({
	user_id: {type: String, required: true},
	user_type: {type: String, required: true},
  	first_name: {type: String},
  	last_name: String, 
  	blood_group: {type: String, required: true}, 
  	address: String, 
  	date_of_birth: {type: Date, required: true, default: Date.now}, 
  	date_admitted: {type: String, required: true}, 
  	department: {type: String, required: true}, 
  	employee_id: {type: String, required: true}, 
  	ailment: {type: String, required: true}, 
  	date_created: {type: Date, default: Date.now},
});