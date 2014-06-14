/**
 * Created by Spy on 2014/6/14.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    name:String
});

mongoose.model('users' , usersSchema);