let User = require("mongoose").model("User");

class UserController{
  
  home(req,res){
    res.render("index");
  }

  register(req,res){
  	console.log(req);

    
  	let newUser = new User(req.body);
  	newUser.save((err)=>{
  	  if(err){
  		  res.render("index",{errors:newuser.errors});
  	  } else {
  		  res.render("index",{message:"new user saved"});
  	  }
    });
  }


  find(req,res){

    // find a user and return the data
    User.findOne({email:req.body.email}, (err,user)=>{

      if (err){
        res.render("index",{message:"error finding user"});
      } else if (!user){
      	res.render("index", {message:"no user found"});
      } else {
        
        res.render("index", {message: user});
      }

    })   

  }


  remove(req,res){

    // remove a user by name from DB


  }

  removeall(req,res){

    // remove all users from DB
    User.remove({}, function(err){
    	res.redirect("/");
    });
  }

}

module.exports = new UserController();