//jshinit esversion: 6
const express = require("express")
const ordersRout = require("./Routs/ordersRout")
const app = express();

app.use(express.urlencoded({extended: true}))
app.use("/", ordersRout)


app.listen(3000 , function(){
  console.log("Server is up and running :) ");
})
