const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true});
var conn =mongoose.Collection;

var employeeSchema =new mongoose.Schema({
	name: String,
	email: String,
	image:String,
});

var employeeModel = mongoose.model('Employee', employeeSchema);
module.exports=employeeModel;