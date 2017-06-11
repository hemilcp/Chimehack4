var mongoose = require('mongoose');
var uuid = require('node-uuid');
var Schema = mongoose.Schema;

var schema = new Schema({
	user_id : { type : String, default : function(){ return uuid(); } },
	name : { type: String, required : true, unique : true},
	country : { type : String, required : true},
	language : {type : String, required : true }
	// phone : { type : String},
	// address : {type : String }

}, { strict : false});


var userModel = mongoose.model('users', schema);

module.exports = userModel;