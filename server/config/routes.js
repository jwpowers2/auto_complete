let UserController = require("../controllers/UserController.js");

module.exports = (app)=>{

  app.get("/",UserController.home);
  app.post("/register",UserController.register);
  app.post("/removeall",UserController.removeall);
  app.post("/find",UserController.find);

}