const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const AuthedicationRoute= require("./routes/Authedication");
const MovieRoute=require("./routes/Movies");
const UserRoute=require("./routes/Users")
dotenv.config();

const app = express();
const port = process.env.PORT || 4002;
const dotenvs= require('dotenv');
dotenvs.config();
app.use(cors());
app.use(bodyParser.json());
const url = process.env.MONGODB_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, 
 })
  .then(() => console.log('MongoDB database connection established successfully'))
  .catch((error) => console.error('Error connecting to MongoDB database:', error));
app.use(express.json());
app.use("/api/auth", AuthedicationRoute);
app.use("/api/users", UserRoute);
app.use("/api/movies", MovieRoute);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
