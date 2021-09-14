const mangoose_DAL = require("../DAL/mangoose_DAL");


exports.getOrdersFromDB = async () => {
  //calculating range between yesterday and today in order to get orders from the last day.
  let today = new Date();
  let yesterday = new Date();
  yesterday.setDate(new Date().getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  console.log("order_model getOrdersFromDB:  from" + yesterday);

  return await mangoose_DAL.getOrdersByDate(yesterday, today)

}


exports.saveOrderToDb = async (order) => {
  console.log("order_model  saveOrderToDb : order: customerName:" +
    order.customerName + " phone: " + order.phone + " address:  " +
    order.address + " bill: " + order.bill + " items: " + order.items)

  return await mangoose_DAL.saveOrder(order)
}
