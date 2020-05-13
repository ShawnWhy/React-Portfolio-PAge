const express = require("express");
const mongoose = require("mongoose");
const routes = require("./api");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);


// Connect to the Mongo DBnp
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mailbox", { useCreateIndex: true,
useNewUrlParser: true,useUnifiedTopology: true},);



//    app.use(express.static("reactportfolioshawnyu/build"));


//   app.use(express.static("build"));


  app.get("/", (req, res) => {
       res.sendFile(path.join(__dirname,  "reactportfolioshawnyu/build", "index.html"));
   });

//  }


//  app.get("/", (req, res) => {
//       res.sendFile(path.resolve(
//         __dirname,  "build", "index.html"));
  // }
  // );



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
