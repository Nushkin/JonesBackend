const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/yammieDB"
mongoose.connect(url)

//orders schema
const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  bill: {
    type: Number,
    required: true
  },
  date: Date,
  items: {
    type: [String],
    required: true
  }
})
const Order = mongoose.model("Order", orderSchema)

// returns all orders between fromDate to toDate from orders table in yammieDB
exports.getOrdersByDate = async (fromDate, toDate) => {
  console.log("mongoose_DAL getOrdersByDate");
  return await Order.find({
    $and: [{
      "date": {
        "$gte": fromDate
      }
    }, {
      "date": {
        "$lt": toDate
      }
    }]
  })
}


//saves newOrder in the  orders table in yammieDB
exports.saveOrder = async (newOrder) => {
  let order = new Order({
    customerName: newOrder.customerName,
    phone: newOrder.phone,
    address: newOrder.address,
    bill: newOrder.bill,
    date: new Date(),
    items: newOrder.items
  })
  console.log("mongoose_DAL:  saveOrder");

  return await order.save()
}
