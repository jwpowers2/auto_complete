let UserController = require("../controllers/UserController.js");

module.exports = (app)=>{

  app.get("/",UserController.home);
  app.post("/register",UserController.register);
  //app.delete("/api/users/:id",UserController.remove);
}