const express = require('express');
const { connection } = require('./db');
const { userRouter } = require('./route/user.route');
const app = express();
app.use(express.json());


app.use("/users",userRouter)

app.listen(8080,async()=>{
await connection
console.log("DB is connected")
})