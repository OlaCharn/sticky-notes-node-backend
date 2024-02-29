const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./WeeklyNotesRoutes")

const cors = require("cors")

//из документации
require("dotenv").config();
mongoose.set("strictQuery", false);

const PORT = 3000 || process.env.port;

app.use(express.json());
app.use(cors());

//соединяемся с MONGODB
mongoose
.connect(process.env.MONGODB_LINK)
.then(()=>console.log("We are connected to MONGO"))
.catch((err)=>console.log(err))

app.use(routes)

app.listen(PORT, ()=>{
    console.log("I am your sweety 3000!")
} )

//cQ0iT561HGkV1CPy
//volhacharnukha