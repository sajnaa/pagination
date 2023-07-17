const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
app.use(cors());

//route
const routes = require("./routes/movies");

//mongodb con
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

app.use("/api", routes);

app.listen(port, () => {
  console.log(`listening ${port}`);
});
