/* 
NOTE: We're going to write a simple log of notification.
In a real world example this could use AWS SNS to corrrectly distribute
the notification. 
*/

exports.handler = (event) => {
  console.log(event)
  let notification = {
    email: event.message.customerEmail,
    orderId: (event.available) ? event.order_id : null,
    message: (event.available) ? `Order ${event.order_id} was placed succesfully.` : "Unfortunately we weren't able to place your order."
  }
  return notification
};
