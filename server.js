var express = require( "express");
var path = require( "path");
var TrieSet = require('./trieset');
var bodyParser = require('body-parser');
var app = express();
const port = 8080;


app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

var ts = new TrieSet();


let User = require("mongoose").model("User");
  	User.find({},(err,cities)=>{
  		if(!cities){
  			console.log("problem getting users");
  		} else if (err){
          console.log(err);
  		} else {
  			cities.forEach(function(city){
          ts.insert(city.name);
        });
  			//console.log(users);

  		}
  	});

var server = app.listen(port, function() {
 console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){

  console.log("Client/socket is connected");
  console.log("Client/socket id is: ", socket.id);

  //input_value, auto_data

  socket.on('input_value', function(data){
  	//console.log(data);
    let result_1 = ts.find(data);
    let result_2 = result_1.slice(0,5);
  	io.emit('auto_data', result_2);
  });

});
