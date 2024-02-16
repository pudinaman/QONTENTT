const express =require("express");
const app = express();
const errorMiddleware =require("./middleware/error")

app.use(express.json());

//Route Imports
const user =require("./routes/userRoutes");
app.use("/api/v1",user);


module.exports =app;

app.use(errorMiddleware);
