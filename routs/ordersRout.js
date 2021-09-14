
const express = require("express");
const router = express.Router();
const orders_model = require("../Model/orders_model");


router.get("/orders" , async (req,res)=>{
  try {
      console.log("ordersRount GET");
      const orders =  await orders_model.getOrdersFromDB()
      if(orders){
          console.log("ordersRount GET: sending satuse: 200. orders: " + orders);
          res.status(200).send(orders)

      }else{
          console.log("ordersRount GET:  orders was not found! sending satuse: 404.");
          res.status(404).send()
      }
    }catch(e){
      console.log("ordersRount GET: ERORE: sending satuse: 500.");
      console.log(e);
      res.status(500).send()
    }
})

router.post("/orders" , async (req,res)=>{
    try {
      console.log("ordersRount POST" );
      const savedOrder = await orders_model.saveOrderToDb(req.body)
      if(savedOrder){
          console.log("ordersRount POST: order saved successfully, sending satuse: 201. " + savedOrder);
          res.status(201).send(savedOrder);
      }else{
        console.log("ordersRount POST: ERORE: order waasnot saved!!!! sending satuse: 500 ");
        res.status(500).send(savedOrder);
      }

    }catch(e){
        console.log("ordersRount POST: ERORE: order waasnot saved!!!! sending satuse: 500 ");
        console.log(e);
          res.status(500).send()
      }
})

module.exports = router;
