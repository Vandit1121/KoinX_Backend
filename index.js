const express = require ("express");
const bodyParser = require ("body-parser");
const connectDb = require ("./config/dbConnect.js");
const dotenv = require ("dotenv");
const apiRoutes = require ("./routes/apiRoutes.js");
require("./utils/cronJob.js");

dotenv.config();
connectDb();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api",apiRoutes);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});