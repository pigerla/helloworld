/**
 * Created by Spy on 2014/5/3.
 */
// Module initializations
var express = require('express') ,
    http = require('http'),
    path = require('path') ,
    mongoose = require('mongoose'),
    ENV = process.env.NODE_ENV || 'development' ;
var app = express();
var fs = require('fs');

// Application setups
app.configure('all' , function(){
    app.set('port' , process.env.PORT || 8080);
    app.set('views' , __dirname + '/views');
    app.set('view engine' ,'jade');
    app.set('view options' , {layout : true});
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.cookieParser());
    app.use(express.session({
        secret:"helloworld",
        cookie:{
            maxAge : 24 * 60 * 60 * 1000
        }
    }));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(path.join(__dirname , 'public')));
});

// Error handling setup
app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    mongoose.connect('mongodb://nodejitsu:ad248da2797713791a2ed93fc81dd4d8@troup.mongohq.com:10027/nodejitsudb8510013760');
});

app.configure('production', function() {
    app.use(express.errorHandler());
});

//load all files in models dir
fs.readdirSync(__dirname + '/models').forEach(function(filename){
    if(~filename.indexOf('.js')) require(__dirname + '/models/' + filename);
})


// Create server and listen application port specified above
http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});

app.get('/' , function(req ,res){
    resData = {
        title :"Hello World | Node App",
        author : "Spy"
    };
    res.render('index' , resData);
});

//get info from remote mongodb
app.get('/users' , function(req ,res){
    mongoose.model('users').find(function(err, users){
        res.send(users);
    })
});
app.get('/posts' , function(req ,res){
    mongoose.model('posts').find(function(err, posts){
        res.send(err+"/"+posts);
    })
});


//test for Android App
app.get('/getMsg' , function(req ,res){
    resData = {
        "msg" : "Congratulations ! Success"
    };
    res.send(resData);
});