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





  remove(req,res){



  }

}

module.exports = new UserController();